// Défilement vers une section spécifique
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// Gestionnaires des boutons principaux
document.addEventListener('DOMContentLoaded', () => {
  const scrollDown = document.getElementById('scrollDown');
  const scrollUp = document.getElementById('scrollUp');
  const accessButton = document.getElementById('accessButton');
  const learnMoreButton = document.getElementById('learnMoreButton');
  const talosAccessLink = document.getElementById('talosAccessLink');
  const finalCtaButton = document.getElementById('finalCtaButton');

  if (scrollDown) scrollDown.addEventListener('click', () => scrollToSection('mission'));
  if (scrollUp) scrollUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  if (accessButton) accessButton.addEventListener('click', () => alert("Redirection vers l'application Talos..."));
  if (learnMoreButton) learnMoreButton.addEventListener('click', () => scrollToSection('benefits'));
  if (talosAccessLink) talosAccessLink.addEventListener('click', (e) => { e.preventDefault(); alert("Accès à l'application Talos en cours..."); });
  if (finalCtaButton) finalCtaButton.addEventListener('click', () => alert("Bienvenue dans l'aventure Talos!"));

// Logique du panneau d'accessibilité
  const a11yFab = document.getElementById('a11yFab');
  const a11yPanel = document.getElementById('a11yPanel');
  const a11yClose = document.getElementById('a11yClose');
  const a11yFont = document.getElementById('a11yFont');
  const a11yContrast = document.getElementById('a11yContrast');
  const a11yReset = document.getElementById('a11yReset');
  const a11yFontSize = document.getElementById('a11yFontSize');
  const a11yFontSizeValue = document.getElementById('a11yFontSizeValue');
  const a11yBgColor = document.getElementById('a11yBgColor');

  function openPanel() {
    if (!a11yPanel) return;
    a11yPanel.classList.add('open');
    a11yPanel.setAttribute('aria-hidden', 'false');
    try {
      const raw = localStorage.getItem('talos_a11y_prefs');
      const prefs = raw ? JSON.parse(raw) : {};
      prefs.panelOpen = true;
      localStorage.setItem('talos_a11y_prefs', JSON.stringify(prefs));
    } catch (e) {}
  }
  function closePanel() {
    if (!a11yPanel) return;
    a11yPanel.classList.remove('open');
    a11yPanel.setAttribute('aria-hidden', 'true');
    try {
      const raw = localStorage.getItem('talos_a11y_prefs');
      const prefs = raw ? JSON.parse(raw) : {};
      prefs.panelOpen = false;
      localStorage.setItem('talos_a11y_prefs', JSON.stringify(prefs));
    } catch (e) {}
  }
  if (a11yFab) a11yFab.addEventListener('click', () => {
    if (!a11yPanel) return;
    const isOpen = a11yPanel.classList.contains('open');
    if (isOpen) closePanel(); else openPanel();
  });
  if (a11yClose) a11yClose.addEventListener('click', closePanel);

  function applyFont(value) {
    const body = document.body;
    body.classList.remove('font-override-arial','font-override-verdana','font-override-tahoma');
    if (value === 'arial') body.classList.add('font-override-arial');
    if (value === 'verdana') body.classList.add('font-override-verdana');
    if (value === 'tahoma') body.classList.add('font-override-tahoma');
  }

  function clearContrast() {
    const body = document.body;
    body.classList.remove('contrast-high-light','contrast-high-dark','contrast-grayscale');
  }
  function applyContrast(value) {
    clearContrast();
    const body = document.body;
    if (value === 'high-light') body.classList.add('contrast-high-light');
    if (value === 'high-dark') body.classList.add('contrast-high-dark');
    if (value === 'grayscale') body.classList.add('contrast-grayscale');
  }

  function applyFontSize(px) {
    const html = document.documentElement;
    html.classList.remove(
      'font-size-root-14','font-size-root-15','font-size-root-16','font-size-root-17','font-size-root-18','font-size-root-19','font-size-root-20','font-size-root-21','font-size-root-22'
    );
    const clamped = Math.max(14, Math.min(22, px));
    html.classList.add('font-size-root-' + clamped);
  }

  function applyBgColor(color) {
    const body = document.body;
    body.style.setProperty('--a11y-bg', color);
    body.classList.add('a11y-bg-custom');
  }

  function savePrefs() {
    const prefs = {
      font: a11yFont ? a11yFont.value : '',
      contrast: a11yContrast ? a11yContrast.value : '',
      fontSize: a11yFontSize ? a11yFontSize.value : '',
      bgColor: a11yBgColor ? a11yBgColor.value : '',
      panelOpen: a11yPanel ? a11yPanel.classList.contains('open') : false,
    };
    try { localStorage.setItem('talos_a11y_prefs', JSON.stringify(prefs)); } catch (e) {}
  }
  function loadPrefs() {
    try {
      const raw = localStorage.getItem('talos_a11y_prefs');
      if (!raw) return;
      const prefs = JSON.parse(raw);
      if (prefs.font && a11yFont) { a11yFont.value = prefs.font; applyFont(prefs.font); }
      if (prefs.contrast && a11yContrast) { a11yContrast.value = prefs.contrast; applyContrast(prefs.contrast); }
      if (prefs.fontSize && a11yFontSize) { a11yFontSize.value = prefs.fontSize; applyFontSize(parseInt(prefs.fontSize, 10)); }
      if (prefs.bgColor && a11yBgColor) { a11yBgColor.value = prefs.bgColor; applyBgColor(prefs.bgColor); }
      if (prefs.panelOpen && a11yPanel && !a11yPanel.classList.contains('open')) {
        openPanel();
      }
    } catch (e) {}
  }

  if (a11yFont) a11yFont.addEventListener('change', () => { applyFont(a11yFont.value); savePrefs(); });
  if (a11yContrast) a11yContrast.addEventListener('change', () => { applyContrast(a11yContrast.value); savePrefs(); });
  if (a11yFontSize) a11yFontSize.addEventListener('input', () => {
    const size = parseInt(a11yFontSize.value, 10);
    applyFontSize(size);
    if (a11yFontSizeValue) a11yFontSizeValue.textContent = size + ' px';
    savePrefs();
  });
  if (a11yBgColor) a11yBgColor.addEventListener('input', () => { applyBgColor(a11yBgColor.value); savePrefs(); });
  if (a11yReset) a11yReset.addEventListener('click', () => {
    if (a11yFont) a11yFont.value = '';
    if (a11yContrast) a11yContrast.value = '';
    if (a11yFontSize) { a11yFontSize.value = 16; if (a11yFontSizeValue) a11yFontSizeValue.textContent = '16 px'; }
    if (a11yBgColor) a11yBgColor.value = '#ffffff';
    applyFont(''); clearContrast(); savePrefs();
    applyFontSize(16); applyBgColor('#ffffff');
  });

  loadPrefs();

  // Si aucune préférence n'est enregistrée, ouvrir le panneau une première fois
  try {
    const raw = localStorage.getItem('talos_a11y_prefs');
    if (!raw && a11yPanel && !a11yPanel.classList.contains('open')) {
      openPanel();
    }
  } catch (e) {}


  // Scroll reveal animation
  function revealOnScroll() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) element.classList.add('visible');
    });
  }

  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn-hover');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      if (button.style.boxShadow === '') {
        button.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
      }
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });

  // Testimonial navigation
  const testimonialsContainer = document.getElementById('testimonials-container');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  if (prevBtn && testimonialsContainer) prevBtn.addEventListener('click', () => testimonialsContainer.scrollBy({ left: -300, behavior: 'smooth' }));
  if (nextBtn && testimonialsContainer) nextBtn.addEventListener('click', () => testimonialsContainer.scrollBy({ left: 300, behavior: 'smooth' }));
  if (testimonialsContainer) {
    testimonialsContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      testimonialsContainer.scrollBy({ left: e.deltaY * 2, behavior: 'smooth' });
    });
  }

  // Keyboard navigation for testimonials
  window.addEventListener('keydown', (e) => {
    if (!testimonialsContainer) return;
    const key = e.key;
    const isLeft = key === 'ArrowLeft' || key === 'Left';
    const isRight = key === 'ArrowRight' || key === 'Right';
    if (isLeft || isRight) {
      e.preventDefault();
      const delta = isLeft ? -300 : 300;
      testimonialsContainer.scrollBy({ left: delta, behavior: 'smooth' });
    }
    if (key === '4' && e.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD) {
      e.preventDefault(); testimonialsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
    if (key === '6' && e.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD) {
      e.preventDefault(); testimonialsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
  });
});

// Inversion (flip) des cartes
function toggleCard(cardFlip) { cardFlip.classList.toggle('flipped'); }

// Lecture vidéo (ouverture/fermeture)
function playVideo() {
  const modal = document.getElementById('videoPlayback');
  const player = document.getElementById('ytPlayer');
  const url = 'https://archive.org/embed/Rick_Astley_Never_Gonna_Give_You_Up?autoplay=1';
  player.src = url;
  modal.style.display = 'flex';
}

function closeVideo() {
  const modal = document.getElementById('videoPlayback');
  const player = document.getElementById('ytPlayer');
  player.src = '';
  modal.style.display = 'none';
}

// Fermeture de la vidéo en cliquant sur l'arrière-plan ou via Échap
document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('videoPlayback');
  if (videoModal) {
    videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideo(); });
  }
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });
});


