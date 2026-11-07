#!/usr/bin/env python3
"""Loopback-only preview and UI-based capture import. No runtime dependencies."""
import argparse
import json
import html
import secrets
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, parse_qs
from sync import merge, ARCHIVE

ROOT = Path(__file__).resolve().parents[2]
TOKEN = secrets.token_urlsafe(24)
FORM = '''<!doctype html><meta charset="utf-8"><title>X archive capture import</title>
<style>body{font:16px system-ui;max-width:800px;margin:50px auto;padding:20px}textarea{width:100%;height:300px}button{padding:12px;margin-top:16px}pre{white-space:pre-wrap}</style>
<h1>Import X capture</h1><p>Local import into x/data/archive.json. No browser credentials are stored.</p>
<label>Captured posts JSON<textarea id="capture" aria-label="Captured posts JSON"></textarea></label>
<button id="save">Save capture</button><pre id="result" role="status"></pre>
<script>document.querySelector('#save').onclick=async()=>{try{const response=await fetch(location.pathname,{method:'POST',headers:{'Content-Type':'application/json'},body:document.querySelector('#capture').value});document.querySelector('#result').textContent=await response.text()}catch(e){document.querySelector('#result').textContent=e.message}};</script>'''

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if urlsplit(self.path).path == '/capture/' + TOKEN:
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            form = FORM
            query = parse_qs(urlsplit(self.path).query)
            if 'batch' in query:
                archive = json.loads(ARCHIVE.read_text())
                posts = [{k:v for k,v in p.items() if k != 'thread'} for root in archive['posts'] for p in [root, *root.get('thread', [])]]
                offset = int(query['batch'][0]) * 120
                payload = {'owner':archive['owner'], 'posts':posts[offset:offset+120], 'collections':archive['collections'], 'sync':archive['sync'], 'total':len(posts)}
                form = form.replace('</textarea>', html.escape(json.dumps(payload, ensure_ascii=False)) + '</textarea>', 1)
            self.wfile.write(form.encode())
        elif urlsplit(self.path).path.startswith('/capture'):
            self.send_error(404)
        else:
            super().do_GET()

    def do_POST(self):
        expected = f'http://127.0.0.1:{self.server.server_port}'
        if self.path != '/capture/' + TOKEN or self.headers.get('Origin') != expected:
            self.send_error(403)
            return
        try:
            size = int(self.headers.get('Content-Length', '0'))
            if not 0 < size <= 50_000_000:
                raise ValueError('Capture size out of bounds')
            result = merge(json.loads(self.rfile.read(size)))
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode())
        except (ValueError, TypeError, KeyError) as error:
            self.send_error(400, str(error))

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8765)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(ROOT)))
    print(f'Preview: http://127.0.0.1:{args.port}/x/', flush=True)
    print(f'Import: http://127.0.0.1:{args.port}/capture/{TOKEN}', flush=True)
    server.serve_forever()
