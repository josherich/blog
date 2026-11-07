// Read-only DOM extractor for cua_repl's tab.playwright.evaluate().
// Read this file, then pass the function below directly to evaluate; do not
// execute in a separate browser runtime. This reads rendered posts only.
() => Array.from(document.querySelectorAll('article[data-testid="tweet"]')).map(a => {
  const names = Array.from(a.querySelectorAll('[data-testid="User-Name"]'));
  const times = Array.from(a.querySelectorAll('time'));
  const texts = Array.from(a.querySelectorAll('[data-testid="tweetText"]'));
  const url = times[0]?.closest('a')?.href;
  if (!url) return null;
  const make = (root, name, text, time) => {
    const parts = name?.innerText.split('\n').filter(Boolean) || [];
    return {
      name: parts[0] || '', handle: parts.find(s => /^@[A-Za-z0-9_]+$/.test(s))?.slice(1) || '',
      avatar: root.querySelector('img[src*="profile_images"]')?.src || '',
      verified: !!name?.querySelector('[data-testid="icon-verified"]'),
      text: text?.innerText || '', date: time?.getAttribute('datetime') || '',
      links: Array.from(text?.querySelectorAll('a') || []).map(l => ({text:l.innerText, url:l.href})),
      media: Array.from(root.querySelectorAll('img[src*="/media/"],video')).map(m => ({
        type: m.tagName === 'VIDEO' ? 'video' : 'image',
        url: m.tagName === 'VIDEO' ? (m.getAttribute('src')?.startsWith('https://video.twimg.com/') ? m.getAttribute('src') : '') : m.src,
        poster: m.getAttribute('poster') || '', alt: m.getAttribute('alt') || ''
      }))
    };
  };
  const quote = names[1]?.closest('[role="link"]');
  const post = make(a, names[0], texts[0], times[0]);
  if (quote) {
    post.quote = make(quote, names[1], texts[1], times[1]);
    post.media = post.media.filter(m => !post.quote.media.some(q => q.url === m.url));
    post.quote.truncated = !!quote.querySelector('[data-testid="tweet-text-show-more-link"]');
  }
  return {
    id:url.match(/status\/(\d+)/)?.[1], url, ...post, handle:new URL(url).pathname.split('/')[1],
    truncated:!!a.querySelector('[data-testid="tweet-text-show-more-link"]'),
    context:a.querySelector('[data-testid="socialContext"]')?.innerText || '',
    liked:!!a.querySelector('[data-testid="unlike"]'),
    bookmarked:!!a.querySelector('[data-testid="removeBookmark"]'),
    unavailable:a.innerText.includes('This post is unavailable.')
  };
}).filter(Boolean)
