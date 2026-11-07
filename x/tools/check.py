#!/usr/bin/env python3
"""Check the shipped archive and exercise merge/thread integrity in a temp file."""
import json
import tempfile
from pathlib import Path
import sync

archive = json.loads(sync.ARCHIVE.read_text())
all_posts = [p for root in archive['posts'] for p in [root, *root.get('thread', [])]]
ids = {p['id'] for p in all_posts}
assert len(ids) == len(all_posts), 'Duplicate post IDs'
for p in all_posts:
    assert p['id'].isdigit() and isinstance(p['id'], str)
    assert p['url'] == f"https://x.com/{p['handle']}/status/{p['id']}"
    assert set(p['categories']) <= sync.CATEGORIES
    assert not ({'likes', 'replyCount', 'viewCount', 'repostCount', 'likeCount'} & p.keys())
    for media in p.get('media', []):
        assert not media.get('url', '').startswith('blob:'), 'Temporary media URL'
for category, order in archive['collections'].items():
    assert len(order) == len(set(order)), 'Duplicate collection ID'
    assert set(order) <= ids, 'Collection points to absent post'

with tempfile.TemporaryDirectory() as tmp:
    original = sync.ARCHIVE
    sync.ARCHIVE = Path(tmp) / 'archive.json'
    def post(i, text, categories, **extra):
        return {'id': str(i), 'handle':'writer', 'name':'Writer', 'text':text,
                'categories':categories, **extra}
    payload = {'owner':{'handle':'josherich'}, 'posts':[
        post(1, 'Start', ['posts']),
        post(2, 'Middle', ['likes'], replyToId='1'),
        post(3, 'End', ['bookmarks'], replyToId='2'),
        {**post(4, 'Other author reply', ['likes'], replyToId='1'), 'handle':'other'}],
        'collections':{'likes':['2','4'], 'bookmarks':['3']}}
    sync.merge(payload)
    result = json.loads(sync.ARCHIVE.read_text())
    root = next(p for p in result['posts'] if p['id']=='1')
    assert [p['id'] for p in root['thread']] == ['2','3']
    assert set(root['categories']) == {'posts','likes','bookmarks'}
    assert result['collections']['likes'] == ['1','4']
    sync.merge({'owner':{'handle':'josherich'}, 'posts':[post(1,'Short',['likes'],truncated=True)]})
    again = json.loads(sync.ARCHIVE.read_text())
    assert next(p for p in again['posts'] if p['id']=='1')['text'] == 'Start'
    sync.ARCHIVE = original
print(f'OK: {len(archive["posts"])} entries / {len(all_posts)} post parts; IDs, collections, safe media, thread merging, preservation')
