(() => {
  'use strict';

  const scaleStorageKey = 'reader-font-scale';
  const familyStorageKey = 'reader-font-family-v2';
  const scales = [0.9, 1, 1.1, 1.2, 1.3];
  const defaultIndex = scales.indexOf(1);
  const fontFamilies = [
    { key: 'default', label: 'Default' },
    { key: 'serif', label: 'Serif' },
    { key: 'mono', label: 'Mono' }
  ];
  const defaultFontFamily = 'mono';
  const root = document.documentElement;
  const readTime = document.querySelector('.readtime');

  if (!readTime) return;

  const readScale = () => {
    try {
      const storedScale = Number(window.sessionStorage.getItem(scaleStorageKey));
      const storedIndex = scales.indexOf(storedScale);
      return storedIndex === -1 ? defaultIndex : storedIndex;
    } catch (_error) {
      return defaultIndex;
    }
  };

  const readFontFamily = () => {
    try {
      const storedFamily = window.sessionStorage.getItem(familyStorageKey);
      return fontFamilies.some(({ key }) => key === storedFamily)
        ? storedFamily
        : defaultFontFamily;
    } catch (_error) {
      return defaultFontFamily;
    }
  };

  let scaleIndex = readScale();
  let fontFamily = readFontFamily();

  const sizeControls = document.createElement('span');
  sizeControls.id = 'reader-font-controls';
  sizeControls.setAttribute('role', 'group');
  sizeControls.setAttribute('aria-label', 'Text size');

  const decreaseButton = document.createElement('button');
  decreaseButton.type = 'button';
  decreaseButton.textContent = 'A−';
  decreaseButton.setAttribute('aria-label', 'Decrease text size');

  const resetButton = document.createElement('button');
  resetButton.type = 'button';
  resetButton.textContent = 'A';
  resetButton.setAttribute('aria-label', 'Reset text size');

  const increaseButton = document.createElement('button');
  increaseButton.type = 'button';
  increaseButton.textContent = 'A+';
  increaseButton.setAttribute('aria-label', 'Increase text size');

  const sizeStatus = document.createElement('span');
  sizeStatus.className = 'visually-hidden';
  sizeStatus.setAttribute('aria-live', 'polite');

  const familyControls = document.createElement('span');
  familyControls.id = 'reader-font-family-controls';
  familyControls.setAttribute('role', 'group');
  familyControls.setAttribute('aria-label', 'Font style');

  const familyStatus = document.createElement('span');
  familyStatus.className = 'visually-hidden';
  familyStatus.setAttribute('aria-live', 'polite');

  const familyButtons = fontFamilies.map(({ key, label }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Ag';
    button.dataset.fontFamily = key;
    button.setAttribute('aria-label', `${label} font`);
    button.title = `${label} font`;
    return button;
  });

  sizeControls.append(decreaseButton, resetButton, increaseButton, sizeStatus);
  familyControls.append(...familyButtons, familyStatus);
  readTime.before(familyControls, sizeControls);

  const applyScale = () => {
    const scale = scales[scaleIndex];
    root.style.setProperty('--reader-font-scale', String(scale));

    try {
      window.sessionStorage.setItem(scaleStorageKey, String(scale));
    } catch (_error) {
      // The controls still work when storage is unavailable.
    }

    const percentage = Math.round(scale * 100);
    decreaseButton.disabled = scaleIndex === 0;
    increaseButton.disabled = scaleIndex === scales.length - 1;
    resetButton.setAttribute('aria-pressed', String(scaleIndex === defaultIndex));
    sizeControls.title = `Text size: ${percentage}%`;
    sizeStatus.textContent = `Text size ${percentage}%`;
  };

  const applyFontFamily = () => {
    const selectedFamily = fontFamilies.find(({ key }) => key === fontFamily);
    root.dataset.readerFont = fontFamily;

    try {
      window.sessionStorage.setItem(familyStorageKey, fontFamily);
    } catch (_error) {
      // The controls still work when storage is unavailable.
    }

    familyButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.fontFamily === fontFamily));
    });
    familyControls.title = `Font: ${selectedFamily.label}`;
    familyStatus.textContent = `${selectedFamily.label} font`;
  };

  decreaseButton.addEventListener('click', () => {
    scaleIndex = Math.max(0, scaleIndex - 1);
    applyScale();
  });

  resetButton.addEventListener('click', () => {
    scaleIndex = defaultIndex;
    applyScale();
  });

  increaseButton.addEventListener('click', () => {
    scaleIndex = Math.min(scales.length - 1, scaleIndex + 1);
    applyScale();
  });

  familyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      fontFamily = button.dataset.fontFamily;
      applyFontFamily();
    });
  });

  applyScale();
  applyFontFamily();
})();
