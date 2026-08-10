(() => {
  'use strict';

  const storageKey = 'matrix-theme';
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sidebarBottom = document.querySelector('#sidebar .sidebar-bottom');

  if (!sidebarBottom) return;

  const button = document.createElement('button');
  button.id = 'matrix-toggle';
  button.type = 'button';
  button.innerHTML = '<i class="fas fa-terminal" aria-hidden="true"></i>';
  sidebarBottom.append(button);

  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-rain';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const context = canvas.getContext('2d', { alpha: true });
  const glyphs = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 16;
  const frameInterval = 58;
  let drops = [];
  let animationFrame = 0;
  let lastFrame = 0;

  const isEnabled = () => root.classList.contains('matrix-mode');

  const resize = () => {
    if (!context) return;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const columns = Math.ceil(window.innerWidth / fontSize);
    drops = Array.from({ length: columns }, (_, index) => drops[index] || Math.random() * -45);
  };

  const draw = (timestamp) => {
    if (!isEnabled() || document.hidden || reducedMotion.matches || !context) return;

    animationFrame = window.requestAnimationFrame(draw);
    if (timestamp - lastFrame < frameInterval) return;
    lastFrame = timestamp;

    context.fillStyle = 'rgba(1, 5, 3, 0.09)';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.font = `${fontSize}px SFMono-Regular, Consolas, monospace`;

    for (let index = 0; index < drops.length; index += 1) {
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = index * fontSize;
      const y = drops[index] * fontSize;

      context.fillStyle = Math.random() > 0.985 ? '#d8ffe0' : '#00ff41';
      context.fillText(glyph, x, y);

      if (y > window.innerHeight && Math.random() > 0.975) drops[index] = 0;
      drops[index] += 0.72;
    }
  };

  const stopRain = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    if (context) context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const startRain = () => {
    stopRain();
    if (isEnabled() && !document.hidden && !reducedMotion.matches) {
      resize();
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const syncButton = () => {
    const enabled = isEnabled();
    button.setAttribute('aria-pressed', String(enabled));
    button.setAttribute('aria-label', enabled ? 'Disable Matrix mode' : 'Enable Matrix mode');
    button.title = enabled ? 'Exit the Matrix' : 'Enter the Matrix';
  };

  button.addEventListener('click', () => {
    root.classList.toggle('matrix-mode');
    try {
      window.localStorage.setItem(storageKey, String(isEnabled()));
    } catch (_error) {
      // The toggle still works when storage is unavailable.
    }
    syncButton();
    startRain();
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  });
  document.addEventListener('visibilitychange', startRain);
  reducedMotion.addEventListener('change', startRain);

  syncButton();
  startRain();
})();
