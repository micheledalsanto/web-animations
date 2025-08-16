# CandleShop - Animazione di Apertura Sito E-commerce

Un'elegante animazione di apertura per un sito e-commerce di candele profumate artigianali. L'animazione presenta una candela interattiva che, una volta "accesa", rivela il contenuto del sito con un effetto radiale di luce.

## 🕯️ Caratteristiche

- **Animazione di accensione**: Candela SVG con fiamma realistica e effetto bagliore
- **Effetto radiale**: La luce si propaga dalla candela rivelando gradualmente il contenuto
- **Design minimale**: Estetica pulita e moderna
- **Responsive**: Ottimizzato per desktop e mobile
- **Accessibilità**: Supporto per tastiera e screen reader
- **Performance**: Animazioni ottimizzate con fallback per dispositivi meno potenti

## 🚀 Demo

Apri `index.html` nel browser per vedere l'animazione in azione:

1. **Stato iniziale**: Sfondo nero con candela centrata e testo "Light me up"
2. **Click sulla candela**: Animazione di accensione con fiamma e bagliore
3. **Rivelazione radiale**: Il contenuto del sito appare gradualmente dall'interno verso l'esterno
4. **Sito completo**: E-commerce di candele completamente visibile e navigabile

## 📁 Struttura del Progetto

```
candleshop/
│
├── index.html          # Struttura HTML principale
├── styles.css          # Tutti gli stili e animazioni CSS
├── script.js           # Logica JavaScript per interazioni e animazioni
└── README.md           # Documentazione del progetto
```

## 🎨 Tecnologie Utilizzate

- **HTML5**: Struttura semantica con SVG per la candela
- **CSS3**: Animazioni, transizioni e layout responsive
- **Vanilla JavaScript**: Gestione eventi e controllo animazioni
- **SVG**: Grafica vettoriale scalabile per la candela

## ⚙️ Funzionalità Tecniche

### Animazioni CSS

- **Fiamma**: Effetto flicker realistico con `@keyframes`
- **Bagliore**: Pulsazione luminosa attorno alla fiamma
- **Accensione**: Transizione fluida da spenta ad accesa
- **Fade out**: Scomparsa graduale della candela
- **Rivelazione radiale**: Effetto di propagazione della luce

### JavaScript

- **Gestione stati**: Controllo dell'animazione e prevenzione click multipli
- **Smooth scroll**: Navigazione fluida tra sezioni
- **Intersection Observer**: Animazioni al scroll per le card prodotti
- **Accessibilità**: Supporto per tastiera (Enter/Space)
- **Performance**: Ottimizzazioni per dispositivi lenti
- **Error handling**: Fallback in caso di errori

### Ottimizzazioni Performance

- **Reduced motion**: Rispetta le preferenze utente per animazioni ridotte
- **Hardware detection**: Disabilita animazioni complesse su dispositivi lenti
- **Resource preloading**: Caricamento anticipato delle risorse critiche
- **CSS will-change**: Ottimizzazioni per il rendering

## 🎯 Personalizzazione

### Modificare i Colori

Nel file `styles.css`, modifica le variabili dei colori:

```css
/* Colore principale del brand */
.logo h1, .cta-button, .price {
    color: #8B4513; /* Marrone candela */
}

/* Gradiente fiamma */
#flameGradient stop {
    stop-color: #ffeb3b; /* Giallo */
    stop-color: #ff9800; /* Arancione */
    stop-color: #ff5722; /* Rosso */
}
```

### Modificare la Velocità delle Animazioni

```css
/* Durata accensione */
@keyframes ignite {
    /* Cambia da 0.8s a valore desiderato */
}

/* Durata rivelazione radiale */
@keyframes radial-reveal {
    /* Cambia da 2s a valore desiderato */
}
```

### Aggiungere Prodotti

Nel file `index.html`, duplica la struttura `.product-card`:

```html
<div class="product-card">
    <div class="product-image"></div>
    <h3>Nome Prodotto</h3>
    <p>Descrizione</p>
    <span class="price">€XX.XX</span>
</div>
```

## 📱 Responsive Design

L'animazione è ottimizzata per diversi dispositivi:

- **Desktop**: Candela 80x160px, navigazione orizzontale
- **Tablet**: Layout adattivo per le card prodotti
- **Mobile**: Candela 60x120px, navigazione verticale

## ♿ Accessibilità

- **Keyboard navigation**: Tab, Enter, Space per interagire
- **ARIA labels**: Descrizioni per screen reader
- **Focus indicators**: Indicatori visivi per la navigazione da tastiera
- **Reduced motion**: Rispetto delle preferenze di accessibilità

## 🔧 Configurazione e Installazione

1. **Clone o download** del progetto
2. **Apri index.html** in un browser moderno
3. **Nessuna dipendenza** esterna richiesta

### Browser Supportati

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🐛 Troubleshooting

### L'animazione non parte

- Verifica che JavaScript sia abilitato
- Controlla la console per errori
- Assicurati che tutti i file siano nella stessa cartella

### Animazioni troppo lente/veloci

- Modifica i valori di `transition-duration` in CSS
- Regola i `setTimeout` in JavaScript per la sincronizzazione

### Problemi su mobile

- L'animazione è ottimizzata automaticamente per dispositivi lenti
- Per dispositivi molto vecchi, considera di disabilitare le animazioni

## 🔮 Sviluppi Futuri

- [ ] Aggiunta suoni (crackling della candela)
- [ ] Effetti particellari per la fiamma
- [ ] Integrazione con CMS per gestione prodotti
- [ ] Versioni multiple (Natale, San Valentino, etc.)
- [ ] PWA per installazione mobile
- [ ] Integrazione e-commerce reale

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Sentiti libero di usarlo e modificarlo per i tuoi progetti.

---

*Illumina la tua esperienza digitale* ✨
