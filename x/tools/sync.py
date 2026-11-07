#!/usr/bin/env python3
"""Validate and merge DOM captures. Python standard library only; never contacts X."""
import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/archive.json'
CATEGORIES = {'posts', 'reposts', 'likes', 'bookmarks'}

def clean_post(p):
    if not isinstance(p, dict) or not re.fullmatch(r'\d+', str(p.get('id', ''))):
        raise ValueError('Every post needs a numeric string id')
    p = dict(p)
    p['id'] = str(p['id'])
    if not re.fullmatch(r'[A-Za-z0-9_]{1,50}', p.get('handle', '')):
        raise ValueError('Invalid author handle')
    p['url'] = f"https://x.com/{p['handle']}/status/{p['id']}"
    p['categories'] = sorted(set(p.get('categories', [])) & CATEGORIES)
    def clean_embedded(part):
        result = dict(part)
        result['media'] = [{**m, 'url': '' if m.get('url', '').startswith('blob:') else m.get('url', '')} for m in result.get('media', [])]
        if result.get('quote'):
            result['quote'] = clean_embedded(result['quote'])
        return result
    p = clean_embedded(p)
    # Metrics, HTML, credentials, and arbitrary page state are never archived.
    fields = ('id', 'url', 'name', 'handle', 'avatar', 'verified', 'text', 'date',
              'links', 'media', 'categories', 'truncated', 'context', 'unavailable',
              'replyToId', 'threadRootId', 'threadIncomplete', 'quote', 'detailCheckedAt')
    p = {k: p[k] for k in fields if k in p}
    for key in ('text', 'name', 'avatar', 'date'):
        if key in p and not isinstance(p[key], str):
            raise ValueError(f'{key} must be text')
    return p

def merge(payload):
    if payload.get('owner', {}).get('handle') != 'josherich':
        raise ValueError('Capture must identify owner @josherich')
    old = json.loads(ARCHIVE.read_text()) if ARCHIVE.exists() else {'posts': [], 'sync': {}, 'collections': {}}
    # Flatten previously grouped threads so a later capture can extend them.
    posts = {}
    for p in old['posts']:
        posts[p['id']] = {k: v for k, v in p.items() if k != 'thread'}
        for child in p.get('thread', []):
            posts[child['id']] = child
    for row in payload.get('posts', []):
        p = clean_post(row)
        prev = posts.get(p['id'], {})
        if prev and not prev.get('truncated') and p.get('truncated'):
            p = {**p, **{k: prev[k] for k in ('text','links','media','quote','truncated') if k in prev}}
        p['categories'] = sorted(set(prev.get('categories', [])) | set(p['categories']))
        posts[p['id']] = {**prev, **p}
    collections = old.get('collections', {})
    for category, ids in payload.get('collections', {}).items():
        if category in CATEGORIES:
            collections[category] = list(dict.fromkeys([str(i) for i in ids] + collections.get(category, [])))
    # Only explicit same-author reply relationships establish a thread. Never
    # infer one from proximity, tweet numbering, or unrelated conversation replies.
    groups, child_ids = {}, set()
    for p in posts.values():
        parent = posts.get(str(p.get('replyToId', '')))
        if not parent or parent['handle'].lower() != p['handle'].lower():
            continue
        seen = {p['id']}
        while parent.get('replyToId') in posts:
            next_parent = posts[parent['replyToId']]
            if next_parent['id'] in seen or next_parent['handle'].lower() != p['handle'].lower():
                break
            seen.add(parent['id'])
            parent = next_parent
        if parent['id'] != p['id']:
            groups.setdefault(parent['id'], []).append(p)
            child_ids.add(p['id'])
    for root_id, children in groups.items():
        root = posts[root_id]
        root['thread'] = sorted(children, key=lambda p: int(p['id']))
        root['categories'] = sorted(set(root['categories']).union(*(set(c['categories']) for c in children)))
        for category, ids in collections.items():
            collections[category] = list(dict.fromkeys(root_id if i in {c['id'] for c in children} else i for i in ids))
    output = [p for i, p in posts.items() if i not in child_ids]
    output.sort(key=lambda p: int(p['id']), reverse=True)
    sync = {**old.get('sync', {}), **payload.get('sync', {})}
    now = datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
    result = {'version': 1, 'owner': {'name': 'Josh Chen', 'handle': 'josherich'},
              'updatedAt': now, 'sync': sync, 'collections': collections, 'posts': output}
    ARCHIVE.parent.mkdir(exist_ok=True)
    temporary = ARCHIVE.with_suffix('.tmp')
    temporary.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(ARCHIVE)
    return {'entries': len(output), 'postsIncludingThreadParts': len(posts), 'updatedAt': now}

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('capture', type=Path)
    args = parser.parse_args()
    print(json.dumps(merge(json.loads(args.capture.read_text()))))
