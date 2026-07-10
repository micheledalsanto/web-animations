const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cards = [...document.querySelectorAll('.demo-card')];

const integrationDetails = [
  { markup: '.magnetic-stage + .magnetic-button', css: 'Section 01', js: 'Section 01', note: 'Keep the stage as the pointer detection area; it creates the magnetic reach.' },
  { markup: '.ripple-button', css: 'Section 02', js: 'Section 02', note: 'The controller creates and removes the ripple at the exact click position.' },
  { markup: '.liquid-button', css: 'Section 03', js: 'Not required', note: 'Copy the decorative <i> element and the liquid-wave keyframes.' },
  { markup: '.menu-button', css: 'Section 04', js: 'Section 04', note: 'Connect aria-expanded to the real navigation visibility in your application.' },
  { markup: '.theme-toggle + .sky-stage', css: 'Section 05', js: 'Section 05', note: 'Apply the resulting theme class to your app root instead of only the demo stage.' },
  { markup: '.bell-button', css: 'Section 06', js: 'Section 06', note: 'Replace the static badge with your notification count and real read state.' },
  { markup: '.heart-button', css: 'Section 07', js: 'Section 07', note: 'Keep aria-pressed synchronized with the saved favorite state.' },
  { markup: '.success-button', css: 'Section 08', js: 'Section 08', note: 'Trigger the success state only after the underlying action has completed.' },
  { markup: '.float-field', css: 'Section 09', js: 'Not required', note: 'The input needs placeholder=" " for the :placeholder-shown selector.' },
  { markup: '.tooltip-trigger + .tooltip', css: 'Section 10', js: 'Not required', note: 'Use a unique tooltip id and reference it with aria-describedby.' },
  { markup: '.skeleton', css: 'Section 11', js: 'Not required', note: 'Match the final content dimensions to prevent layout shift.' },
  { markup: '.orbital-loader', css: 'Section 12', js: 'Not required', note: 'Use role="status" and an accessible label for this indeterminate loader.' },
  { markup: '.progress-ring', css: 'Section 13', js: 'Optional value setter', note: 'Update strokeDashoffset and aria-valuenow from the same progress value.' },
  { markup: '.equalizer', css: 'Section 14', js: 'Section 14', note: 'Connect the paused class to the actual audio or playback state.' },
  { markup: '.word-stage', css: 'Section 15', js: 'Observer or .is-visible', note: 'Add .is-visible to a parent when the heading enters the viewport.' },
  { markup: '.scramble-text[data-text]', css: 'Section 16', js: 'Section 16', note: 'Keep the final readable value in data-text and use the effect on short labels.' },
  { markup: '.tilt-stage + .tilt-card', css: 'Section 17', js: 'Section 17', note: 'Perspective belongs on the parent; pointer coordinates stay local to the card.' },
  { markup: '.flip-card > .flip-inner', css: 'Section 18', js: 'Section 18', note: 'Do not nest interactive controls inside the button-based version.' },
  { markup: '.accordion', css: 'Section 19', js: 'Section 19', note: 'Give every panel a unique id and match it with aria-controls.' },
  { markup: '.spotlight', css: 'Section 20', js: 'Section 20', note: 'Keep text readable without the spotlight; pointer motion is an enhancement.' },
  { markup: '.trace-button', css: 'Section 21', js: 'Not required', note: 'Keep the inner surface above the rotating conic-gradient border.' },
  { markup: '.split-button > span × 2', css: 'Section 22', js: 'Not required', note: 'Provide one accessible button label; hide the duplicated visual layers from assistive technology.' },
  { markup: '.depth-button', css: 'Section 23', js: 'Not required', note: 'Use :active to reduce both vertical offset and the simulated depth shadow.' },
  { markup: '.arrow-button', css: 'Section 24', js: 'Not required', note: 'The directional icon is decorative; keep it aria-hidden.' },
  { markup: '.shine-button', css: 'Section 25', js: 'Not required', note: 'Use the highlight sparingly and preserve readable text throughout the sweep.' },
  { markup: '.hold-button', css: 'Section 26', js: 'Section 26', note: 'Support pointer and keyboard hold, and cancel progress when input is released early.' },
  { markup: '.copy-chip + .copy-button', css: 'Section 27', js: 'Section 27', note: 'Use the Clipboard API when available and keep the confirmation inside the existing control.' },
  { markup: '.check-toggle', css: 'Section 28', js: 'Section 28', note: 'Keep aria-checked synchronized with the visual switch state.' },
  { markup: '.toast-launcher + .toast-region', css: 'Section 29', js: 'Section 29', note: 'The toast region needs aria-live and should limit the number of simultaneous messages.' },
  { markup: '.rating', css: 'Section 30', js: 'Section 30', note: 'Each star needs a clear numeric label and selection must remain visible without motion.' },
  { markup: '.dot-pulse', css: 'Section 31', js: 'Not required', note: 'Use this only for indeterminate background activity and provide a status label.' },
  { markup: '.segment-spinner > i × 8', css: 'Section 32', js: 'Not required', note: 'The stepped rotation is decorative; expose loading state on the wrapper.' },
  { markup: '.typing-bubble', css: 'Section 33', js: 'Not required', note: 'Use an explicit accessible label such as “Someone is typing”.' },
  { markup: '.wave-loader > i × 5', css: 'Section 34', js: 'Not required', note: 'Staggered delays create the wave without JavaScript.' },
  { markup: '.conic-spinner > span', css: 'Section 35', js: 'Not required', note: 'The inner surface masks a rotating conic gradient into a ring.' },
  { markup: '.step-loader', css: 'Section 36', js: 'Section 36', note: 'Update aria-valuenow and the visible label from the same step value.' },
  { markup: '.letter-stagger > i', css: 'Section 37', js: 'Observer or .is-visible', note: 'Keep a complete aria-label because visual letters are split across elements.' },
  { markup: '.gradient-text', css: 'Section 38', js: 'Not required', note: 'Use a solid-color fallback before applying background-clip to text.' },
  { markup: '.typewriter', css: 'Section 39', js: 'Observer or .is-visible', note: 'Set the step count and width to match the exact character count.' },
  { markup: '.rolling-number[data-target]', css: 'Section 40', js: 'Section 40', note: 'Render the final value immediately when reduced motion is enabled.' },
  { markup: '.highlight-text > mark', css: 'Section 41', js: 'Observer or .is-visible', note: 'The semantic mark remains understandable before the reveal runs.' },
  { markup: '.blur-reveal > span', css: 'Section 42', js: 'Observer or .is-visible', note: 'Keep blur duration short and preserve a complete reading order.' },
  { markup: '.kinetic-link > span', css: 'Section 43', js: 'Not required', note: 'The underline is decorative; the link must remain identifiable without animation.' },
  { markup: '.word-rotator', css: 'Section 44', js: 'Not required', note: 'Repeat the first word at the end of the reel for a seamless loop.' },
  { markup: '.parallax-stage + .parallax-layers', css: 'Section 45', js: 'Section 45', note: 'Move each plane at a different ratio and reset every offset on pointer leave.' },
  { markup: '.glare-card', css: 'Section 46', js: 'Section 46', note: 'The radial glare uses local pointer percentages and must not affect text contrast.' },
  { markup: '.mini-dock', css: 'Section 47', js: 'Not required', note: 'Every icon needs an accessible label and a visible keyboard focus state.' },
  { markup: '.cube-stage + .css-cube', css: 'Section 48', js: 'Not required', note: 'Perspective belongs on the stage and transform-style belongs on the cube.' },
  { markup: '.card-stack', css: 'Section 49', js: 'Not required', note: 'Treat the layered cards as one control unless every item becomes independently actionable.' },
  { markup: '.drag-zone + .drag-orb', css: 'Section 50', js: 'Section 50', note: 'Use pointer capture, constrain movement to the zone and spring back on release.' }
];

function splitNumberedSections(source, pattern, endMarker = source.length) {
  const matches = [...source.matchAll(pattern)];
  return Object.fromEntries(matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? endMarker;
    return [match[1], source.slice(start, end).trim()];
  }));
}

const sourceSectionsPromise = Promise.all([
  fetch('styles.css').then((response) => {
    if (!response.ok) throw new Error(`CSS source returned ${response.status}`);
    return response.text();
  }),
  fetch('script.js').then((response) => {
    if (!response.ok) throw new Error(`JavaScript source returned ${response.status}`);
    return response.text();
  })
]).then(([cssSource, jsSource]) => ({
  css: splitNumberedSections(
    cssSource,
    /^\/\*\s*(\d{2})\s+[^\n]*\*\//gm,
    cssSource.indexOf('/* End numbered interaction sections */')
  ),
  js: splitNumberedSections(jsSource, /^\/\/\s*(\d{2})\s+[^\n]*$/gm)
}));

function formatMarkup(markup) {
  return markup
    .replace(/>\s*</g, '>\n<')
    .replace(/^\s+|\s+$/g, '');
}

function getComponentMarkup(card) {
  const stage = card.querySelector('.stage').cloneNode(true);
  stage.classList.remove('stage');
  return formatMarkup(stage.classList.length ? stage.outerHTML : stage.innerHTML);
}

async function copyText(text, button) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.append(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    const original = button.textContent;
    button.textContent = 'Copied';
    window.setTimeout(() => { button.textContent = original; }, 1200);
  } catch {
    button.textContent = 'Copy failed';
  }
}

async function hydrateIntegrationPanel(panel, number, details, html) {
  if (panel.dataset.loaded === 'true') return;
  const htmlCode = panel.querySelector('[data-snippet="html"]');
  const cssCode = panel.querySelector('[data-snippet="css"]');
  const jsCode = panel.querySelector('[data-snippet="js"]');

  htmlCode.textContent = html;

  try {
    const sources = await sourceSectionsPromise;
    const css = sources.css[number] || '/* No numbered CSS section found. */';
    const controller = sources.js[number];
    const js = details.js === 'Not required'
      ? '// No JavaScript required. The interaction is implemented entirely in CSS.'
      : `const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n${controller || '// No controller source found.'}`;

    cssCode.textContent = css;
    jsCode.textContent = js;
  } catch {
    cssCode.textContent = '/* Source loading requires the local HTTP server. Run: python -m http.server 8000 */';
    jsCode.textContent = '// Open http://localhost:8000/micro-interactions-lab/ to load the complete controller.';
  }

  panel.dataset.loaded = 'true';
  panel.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.copy;
      const text = type === 'all'
        ? `<!-- HTML -->\n${html}\n\n/* CSS */\n${cssCode.textContent}\n\n// JavaScript\n${jsCode.textContent}`
        : panel.querySelector(`[data-snippet="${type}"]`).textContent;
      copyText(text, button);
    });
  });
}

function closeIntegration(except = null) {
  cards.forEach((card) => {
    const tooltip = card.querySelector('.integration-tooltip');
    const trigger = card.querySelector('.integration-trigger');
    if (!tooltip || tooltip === except) return;
    tooltip.classList.remove('is-open');
    tooltip.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    card.classList.remove('has-integration-open');
  });
}

function restartCard(card) {
  card.classList.remove('is-visible');
  card.dispatchEvent(new CustomEvent('motion:reset'));
  void card.offsetWidth;
  card.classList.add('is-visible');
  card.dispatchEvent(new CustomEvent('motion:replay'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    entry.target.dispatchEvent(new CustomEvent('motion:replay'));
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

cards.forEach((card, index) => {
  const title = card.querySelector('h3').textContent;
  const number = String(index + 1).padStart(2, '0');
  const details = integrationDetails[index];
  const header = card.querySelector('.card-head');
  const replay = card.querySelector('.replay');
  const actions = document.createElement('div');
  const trigger = document.createElement('button');
  const tooltip = document.createElement('section');
  const tooltipId = `integration-${number}`;
  const titleId = `${tooltipId}-title`;
  const integrationMarkup = getComponentMarkup(card);

  card.id = `interaction-${number}`;

  actions.className = 'card-actions';
  trigger.className = 'integration-trigger';
  trigger.type = 'button';
  trigger.innerHTML = '<span aria-hidden="true">&lt;/&gt;</span>';
  trigger.setAttribute('aria-label', `Open complete integration guide for ${title}`);
  trigger.setAttribute('aria-controls', tooltipId);
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-expanded', 'false');

  tooltip.className = 'integration-tooltip';
  tooltip.id = tooltipId;
  tooltip.setAttribute('role', 'dialog');
  tooltip.setAttribute('aria-labelledby', titleId);
  tooltip.setAttribute('aria-hidden', 'true');
  tooltip.innerHTML = `
    <header class="integration-panel-head">
      <div>
        <p class="integration-kicker">COMPLETE INTEGRATION · ${number}</p>
        <h4 id="${titleId}">${title}</h4>
      </div>
      <button class="integration-close" type="button" aria-label="Close integration guide">×</button>
    </header>
    <p class="integration-intro">Copy the rendered component markup, its complete scoped CSS and the controller below. Then connect the state to your application.</p>
    <ol class="integration-steps">
      <li>Place the HTML where the component should render.</li>
      <li>Paste the CSS after your design tokens and set <code>--accent</code>.</li>
      <li>Run the JavaScript after the markup mounts. Remove optional <code>motion:reset</code> replay hooks outside this lab.</li>
      <li>Test keyboard input, reduced motion and the behavior contract below.</li>
    </ol>
    <div class="integration-contract"><strong>Behavior contract</strong><p>${details.note}</p></div>
    <div class="snippet-list">
      <section class="snippet-block"><header><strong>HTML</strong><button type="button" data-copy="html">Copy HTML</button></header><pre><code data-snippet="html">Preparing markup…</code></pre></section>
      <section class="snippet-block"><header><strong>CSS</strong><button type="button" data-copy="css">Copy CSS</button></header><pre><code data-snippet="css">Loading complete CSS…</code></pre></section>
      <section class="snippet-block"><header><strong>JavaScript</strong><button type="button" data-copy="js">Copy JS</button></header><pre><code data-snippet="js">Loading controller…</code></pre></section>
    </div>
    <button class="copy-all" type="button" data-copy="all">Copy complete integration</button>
  `;

  replay.replaceWith(actions);
  actions.append(trigger, tooltip, replay);
  header.append(actions);

  trigger.addEventListener('click', () => {
    const willOpen = !tooltip.classList.contains('is-open');
    closeIntegration(willOpen ? tooltip : null);
    tooltip.classList.toggle('is-open', willOpen);
    tooltip.setAttribute('aria-hidden', String(!willOpen));
    trigger.setAttribute('aria-expanded', String(willOpen));
    card.classList.toggle('has-integration-open', willOpen);
    if (willOpen) {
      hydrateIntegrationPanel(tooltip, number, details, integrationMarkup);
      window.requestAnimationFrame(() => tooltip.querySelector('.integration-close').focus());
    }
  });

  tooltip.querySelector('.integration-close').addEventListener('click', () => {
    closeIntegration();
    trigger.focus();
  });

  observer.observe(card);
  replay.addEventListener('click', () => {
    closeIntegration();
    restartCard(card);
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.card-actions')) closeIntegration();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const openPanel = document.querySelector('.integration-tooltip.is-open');
  const openTrigger = openPanel?.previousElementSibling;
  closeIntegration();
  openTrigger?.focus();
});

const requestedIntegration = new URLSearchParams(window.location.search).get('integration');
if (/^\d{2}$/.test(requestedIntegration || '')) {
  document.querySelector(`#interaction-${requestedIntegration} .integration-trigger`)?.click();
}

window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
});

document.querySelector('#replay-all').addEventListener('click', () => {
  cards.filter((card) => !card.hidden).forEach((card, index) => {
    window.setTimeout(() => restartCard(card), reducedMotion ? 0 : index * 35);
  });
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    closeIntegration();
    const filter = button.dataset.filter;

    document.querySelectorAll('.filter').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    cards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) window.requestAnimationFrame(() => card.classList.add('is-visible'));
    });
  });
});

// 01 — Magnetic button
document.querySelectorAll('.magnetic-stage').forEach((stage) => {
  const button = stage.querySelector('.magnetic-button');

  stage.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(x, y);
    const influence = Math.max(0, 1 - distance / 190);
    button.style.setProperty('--mx', `${x * influence * 0.24}px`);
    button.style.setProperty('--my', `${y * influence * 0.24}px`);
  });

  stage.addEventListener('pointerleave', () => {
    button.style.setProperty('--mx', '0px');
    button.style.setProperty('--my', '0px');
  });
});

// 02 — Click-position ripple
document.querySelectorAll('.ripple-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const dot = document.createElement('span');
    const rect = button.getBoundingClientRect();
    dot.className = 'ripple-dot';
    dot.style.left = `${event.clientX ? event.clientX - rect.left : rect.width / 2}px`;
    dot.style.top = `${event.clientY ? event.clientY - rect.top : rect.height / 2}px`;
    button.append(dot);
    dot.addEventListener('animationend', () => dot.remove(), { once: true });
  });
});

// 04 — Menu morph
document.querySelectorAll('.menu-button').forEach((button) => {
  const setOpen = (open) => {
    button.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  button.addEventListener('click', () => setOpen(!button.classList.contains('is-open')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setOpen(false));
});

// 05 — Day/night switch
document.querySelectorAll('.theme-toggle').forEach((button) => {
  const stage = button.closest('.sky-stage');
  const setNight = (night) => {
    button.classList.toggle('is-night', night);
    stage.classList.toggle('is-night', night);
    button.setAttribute('aria-checked', String(night));
    button.setAttribute('aria-label', night ? 'Enable day mode' : 'Enable night mode');
  };
  button.addEventListener('click', () => setNight(!button.classList.contains('is-night')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setNight(false));
});

// 06 — Notification bell
document.querySelectorAll('.bell-button').forEach((button) => {
  const ring = () => {
    button.classList.remove('ringing');
    void button.offsetWidth;
    button.classList.add('ringing');
  };
  button.addEventListener('click', () => {
    button.classList.toggle('is-read');
    ring();
  });
  const card = button.closest('.demo-card');
  card.addEventListener('motion:reset', () => button.classList.remove('is-read', 'ringing'));
  card.addEventListener('motion:replay', ring);
});

// 07 — Favorite burst
document.querySelectorAll('.heart-button').forEach((button) => {
  const setLiked = (liked) => {
    button.classList.toggle('is-liked', liked);
    button.setAttribute('aria-pressed', String(liked));
    button.setAttribute('aria-label', liked ? 'Remove from favorites' : 'Add to favorites');
  };
  button.addEventListener('click', () => setLiked(!button.classList.contains('is-liked')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setLiked(false));
});

// 08 — Submit-to-success morph
document.querySelectorAll('.success-button').forEach((button) => {
  let resetTimer;
  const setSuccess = (success) => button.classList.toggle('is-success', success);
  button.addEventListener('click', () => {
    window.clearTimeout(resetTimer);
    setSuccess(true);
    resetTimer = window.setTimeout(() => setSuccess(false), 1900);
  });
  button.closest('.demo-card').addEventListener('motion:reset', () => {
    window.clearTimeout(resetTimer);
    setSuccess(false);
  });
});

// 14 — Equalizer play/pause
document.querySelectorAll('.equalizer').forEach((button) => {
  const setPaused = (paused) => {
    button.classList.toggle('is-paused', paused);
    button.setAttribute('aria-pressed', String(!paused));
    button.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
  };
  button.addEventListener('click', () => setPaused(!button.classList.contains('is-paused')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setPaused(false));
});

// 16 — Text scramble/decode
document.querySelectorAll('.scramble-text').forEach((element) => {
  const card = element.closest('.demo-card');
  const target = element.dataset.text;
  const glyphs = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789#&';
  let frameId;

  const play = () => {
    window.cancelAnimationFrame(frameId);
    if (reducedMotion) {
      element.textContent = target;
      return;
    }

    let frame = 0;
    const total = target.length * 4;
    const tick = () => {
      element.textContent = [...target].map((character, index) => {
        if (character === ' ') return ' ';
        if (frame / 4 > index) return character;
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      }).join('');
      frame += 1;
      if (frame <= total) frameId = window.requestAnimationFrame(tick);
      else element.textContent = target;
    };
    tick();
  };

  card.addEventListener('motion:replay', play);
  card.addEventListener('motion:reset', () => window.cancelAnimationFrame(frameId));
});

// 17 — Perspective tilt and local highlight
document.querySelectorAll('.tilt-card').forEach((card) => {
  const reset = () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--shine-x', '50%');
    card.style.setProperty('--shine-y', '50%');
  };
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--ry', `${(x - 0.5) * 18}deg`);
    card.style.setProperty('--rx', `${(0.5 - y) * 18}deg`);
    card.style.setProperty('--shine-x', `${x * 100}%`);
    card.style.setProperty('--shine-y', `${y * 100}%`);
  });
  card.addEventListener('pointerleave', reset);
  card.addEventListener('blur', reset);
});

// 18 — 3D flip card
document.querySelectorAll('.flip-card').forEach((button) => {
  const setFlipped = (flipped) => {
    button.classList.toggle('is-flipped', flipped);
    button.setAttribute('aria-pressed', String(flipped));
  };
  button.addEventListener('click', () => setFlipped(!button.classList.contains('is-flipped')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setFlipped(false));
});

// 19 — Accessible accordion
document.querySelectorAll('.accordion').forEach((accordion) => {
  const button = accordion.querySelector('button');
  const panel = accordion.querySelector('div');
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  accordion.closest('.demo-card').addEventListener('motion:reset', () => setOpen(false));
});

// 20 — Cursor spotlight
document.querySelectorAll('.spotlight').forEach((spotlight) => {
  const setPosition = (x, y) => {
    spotlight.style.setProperty('--sx', `${x}%`);
    spotlight.style.setProperty('--sy', `${y}%`);
  };
  spotlight.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = spotlight.getBoundingClientRect();
    setPosition((event.clientX - rect.left) / rect.width * 100, (event.clientY - rect.top) / rect.height * 100);
  });
  spotlight.addEventListener('pointerleave', () => setPosition(50, 50));
  spotlight.addEventListener('focus', () => setPosition(50, 50));
});

// 26 — Press-and-hold confirmation
document.querySelectorAll('.hold-button').forEach((button) => {
  let timer;
  const start = () => {
    if (button.classList.contains('is-complete')) return;
    window.clearTimeout(timer);
    button.classList.remove('is-holding');
    void button.offsetWidth;
    button.classList.add('is-holding');
    timer = window.setTimeout(() => {
      button.classList.remove('is-holding');
      button.classList.add('is-complete');
      button.querySelector('span').textContent = 'Confirmed';
      button.setAttribute('aria-label', 'Confirmed');
    }, reducedMotion ? 50 : 1300);
  };
  const cancel = () => {
    window.clearTimeout(timer);
    if (!button.classList.contains('is-complete')) button.classList.remove('is-holding');
  };
  const reset = () => {
    window.clearTimeout(timer);
    button.classList.remove('is-holding', 'is-complete');
    button.querySelector('span').textContent = 'Hold to confirm';
    button.setAttribute('aria-label', 'Press and hold to confirm');
  };
  button.addEventListener('pointerdown', start);
  button.addEventListener('pointerup', cancel);
  button.addEventListener('pointercancel', cancel);
  button.addEventListener('pointerleave', cancel);
  button.addEventListener('keydown', (event) => {
    if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) start();
  });
  button.addEventListener('keyup', (event) => {
    if (event.key === ' ' || event.key === 'Enter') cancel();
  });
  button.closest('.demo-card').addEventListener('motion:reset', reset);
});

// 27 — Copy confirmation
document.querySelectorAll('.copy-button').forEach((button) => {
  let timer;
  const reset = () => {
    window.clearTimeout(timer);
    button.classList.remove('is-copied');
    button.setAttribute('aria-label', `Copy ${button.dataset.copy}`);
  };
  button.addEventListener('click', () => {
    navigator.clipboard?.writeText(button.dataset.copy).catch(() => {});
    button.classList.add('is-copied');
    button.setAttribute('aria-label', `${button.dataset.copy} copied`);
    window.clearTimeout(timer);
    timer = window.setTimeout(reset, 1600);
  });
  button.closest('.demo-card').addEventListener('motion:reset', reset);
});

// 28 — Check toggle
document.querySelectorAll('.check-toggle').forEach((button) => {
  const setOn = (on) => {
    button.classList.toggle('is-on', on);
    button.setAttribute('aria-checked', String(on));
  };
  button.addEventListener('click', () => setOn(!button.classList.contains('is-on')));
  button.closest('.demo-card').addEventListener('motion:reset', () => setOn(false));
});

// 29 — Toast stack
document.querySelectorAll('.toast-stage').forEach((stage) => {
  const launcher = stage.querySelector('.toast-launcher');
  const region = stage.querySelector('.toast-region');
  let count = 0;
  const clear = () => region.replaceChildren();
  launcher.addEventListener('click', () => {
    count += 1;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = `Update ${count} completed`;
    region.prepend(toast);
    while (region.children.length > 3) region.lastElementChild.remove();
    window.setTimeout(() => {
      toast.classList.add('is-leaving');
      window.setTimeout(() => toast.remove(), 320);
    }, 2300);
  });
  stage.closest('.demo-card').addEventListener('motion:reset', clear);
});

// 30 — Rating selection wave
document.querySelectorAll('.rating').forEach((rating) => {
  const buttons = [...rating.querySelectorAll('button')];
  const setRating = (value) => {
    buttons.forEach((button, index) => {
      button.classList.remove('is-selected');
      if (index < value) {
        window.setTimeout(() => button.classList.add('is-selected'), reducedMotion ? 0 : index * 70);
      }
      button.setAttribute('aria-pressed', String(index + 1 === value));
    });
  };
  buttons.forEach((button, index) => button.addEventListener('click', () => setRating(index + 1)));
  setRating(0);
  rating.closest('.demo-card').addEventListener('motion:reset', () => setRating(0));
});

// 36 — Discrete step progress
document.querySelectorAll('.step-loader').forEach((loader) => {
  const card = loader.closest('.demo-card');
  const steps = [...loader.querySelectorAll('i')];
  const label = loader.querySelector('strong');
  const labels = ['Preparing', 'Connecting', 'Processing', 'Complete'];
  let timer;
  const play = () => {
    window.clearInterval(timer);
    let current = 0;
    steps.forEach((step) => step.classList.remove('is-done'));
    label.textContent = labels[0];
    loader.setAttribute('aria-valuenow', '0');
    timer = window.setInterval(() => {
      steps[current].classList.add('is-done');
      current += 1;
      loader.setAttribute('aria-valuenow', String(current));
      label.textContent = labels[Math.min(current, labels.length - 1)];
      if (current === steps.length) window.clearInterval(timer);
    }, reducedMotion ? 20 : 430);
  };
  card.addEventListener('motion:replay', play);
  card.addEventListener('motion:reset', () => window.clearInterval(timer));
});

// 40 — Rolling number
document.querySelectorAll('.rolling-number').forEach((element) => {
  const card = element.closest('.demo-card');
  const target = Number(element.dataset.target);
  let frame;
  const play = () => {
    window.cancelAnimationFrame(frame);
    if (reducedMotion) {
      element.textContent = String(target);
      return;
    }
    const start = performance.now();
    const tick = (time) => {
      const progress = Math.min(1, (time - start) / 1200);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
  };
  card.addEventListener('motion:replay', play);
  card.addEventListener('motion:reset', () => {
    window.cancelAnimationFrame(frame);
    element.textContent = '0';
  });
});

// 45 — Multi-layer parallax
document.querySelectorAll('.parallax-layers').forEach((layers) => {
  const reset = () => ['--p1x','--p1y','--p2x','--p2y','--p3x','--p3y','--ptx','--pty'].forEach((name) => layers.style.setProperty(name, '0px'));
  layers.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = layers.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    layers.style.setProperty('--p1x', `${x * .08}px`); layers.style.setProperty('--p1y', `${y * .08}px`);
    layers.style.setProperty('--p2x', `${x * .16}px`); layers.style.setProperty('--p2y', `${y * .16}px`);
    layers.style.setProperty('--p3x', `${x * .25}px`); layers.style.setProperty('--p3y', `${y * .25}px`);
    layers.style.setProperty('--ptx', `${x * .32}px`); layers.style.setProperty('--pty', `${y * .32}px`);
  });
  layers.addEventListener('pointerleave', reset);
  layers.addEventListener('blur', reset);
});

// 46 — Glass glare
document.querySelectorAll('.glare-card').forEach((card) => {
  const reset = () => { card.style.setProperty('--gx', '50%'); card.style.setProperty('--gy', '50%'); };
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--gx', `${(event.clientX - rect.left) / rect.width * 100}%`);
    card.style.setProperty('--gy', `${(event.clientY - rect.top) / rect.height * 100}%`);
  });
  card.addEventListener('pointerleave', reset);
  card.addEventListener('blur', reset);
});

// 50 — Constrained elastic drag
document.querySelectorAll('.drag-orb').forEach((orb) => {
  const zone = orb.closest('.drag-zone');
  let active = false;
  const move = (event) => {
    if (!active) return;
    const rect = zone.getBoundingClientRect();
    const maxX = (rect.width - orb.offsetWidth) / 2 - 5;
    const maxY = (rect.height - orb.offsetHeight) / 2 - 5;
    const x = Math.max(-maxX, Math.min(maxX, event.clientX - rect.left - rect.width / 2));
    const y = Math.max(-maxY, Math.min(maxY, event.clientY - rect.top - rect.height / 2));
    orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  };
  const release = () => {
    active = false;
    orb.classList.remove('is-dragging');
    orb.style.removeProperty('transform');
  };
  orb.addEventListener('pointerdown', (event) => {
    active = true;
    orb.classList.add('is-dragging');
    orb.setPointerCapture(event.pointerId);
    move(event);
  });
  orb.addEventListener('pointermove', move);
  orb.addEventListener('pointerup', release);
  orb.addEventListener('pointercancel', release);
  orb.closest('.demo-card').addEventListener('motion:reset', release);
});
