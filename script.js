function extractYouTubeID(url) {
  try {
    if (!url.includes('http') && /^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim();

    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1);
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return v;
      const parts = u.pathname.split('/');
      return parts[parts.length - 1];
    }
  } catch (e) {
    // invalid URL
  }
  return null;
}

const playBtn = document.getElementById('playBtn');
const urlInput = document.getElementById('url');
const iframe = document.getElementById('playerIframe');

playBtn.addEventListener('click', () => {
  const raw = urlInput.value.trim();
  const id = extractYouTubeID(raw);
  if (!id) {
    alert('Could not extract a YouTube video ID from that URL. Try a full URL or just the 11-char ID.');
    return;
  }
  const embed = 'https://www.youtube.com/embed/' + encodeURIComponent(id) + '?rel=0&modestbranding=1';
  iframe.src = embed;
});

urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') playBtn.click();
});
