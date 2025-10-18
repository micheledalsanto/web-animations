# Cart Animation

Un'animazione moderna e fluida per l'aggiunta di prodotti al carrello con supporto multi-valuta.

## Caratteristiche

- **Animazione Add to Cart**: Click fluido con feedback visivo immediato (checkmark verde)
- **Cart Icon bounce**: L'icona del carrello si anima con un bounce elastico ad ogni aggiunta
- **Counter animato**: Badge con numero items che appare con animazione elastic
- **Price update animato**: Il prezzo totale si aggiorna con effetto scale e cambio colore
- **Multi-valuta**: Supporto per 4 valute diverse con conversione in tempo reale
  - EUR (€) - Euro
  - USD ($) - Dollaro USA
  - GBP (£) - Sterlina britannica
  - JPY (¥) - Yen giapponese (formato lungo con migliaia per test compatibilità)
- **Design moderno**: Sfondo dark gradient, glassmorphism, effetti hover fluidi
- **Responsive**: Si adatta a diversi dispositivi

## Come funziona

1. **Seleziona valuta**: Clicca su uno dei bottoni in alto a sinistra (EUR, USD, GBP, JPY)
   - Il prezzo del prodotto si aggiorna automaticamente
   - Il simbolo della valuta cambia ovunque
   - Per lo Yen: formato senza decimali con separatore migliaia (¥24,225)

2. **Aggiungi al carrello**: Clicca sul bottone "Add to Cart"
   - Il bottone diventa verde con checkmark "Added!"
   - L'icona del carrello fa un bounce
   - Il prezzo totale si aggiorna con animazione
   - Il badge counter appare/si aggiorna
   - Dopo 2 secondi il bottone torna normale

3. **Cart button**: In alto a destra mostra sempre:
   - Icona carrello
   - Numero items (badge blu)
   - Prezzo totale nella valuta selezionata

## Personalizzazione

### Tassi di conversione

Nel file `index.html`, linee 15-18, puoi modificare i tassi:

```html
<button class="currency-btn" data-currency="EUR" data-symbol="€" data-rate="1">EUR (€)</button>
<button class="currency-btn" data-currency="USD" data-symbol="$" data-rate="1.09">USD ($)</button>
```

### Prezzo base prodotto

Nel file `script.js`, linea 8:

```javascript
this.basePrice = 149.99; // Base price in EUR
```

### Colori

Nel file `style.css`, variabili CSS:

```css
:root {
    --primary-color: #3b82f6;
    --success-color: #10b981;
    --bg-dark: #0f172a;
    --bg-card: #1e293b;
}
```

## File

- `index.html` - Struttura HTML con product card e cart button
- `style.css` - Stili CSS dark theme con animazioni
- `script.js` - Logica JavaScript per carrello e valute
- `blaz-erzetic-j9Vr54fl2dI-unsplash.jpg` - Immagine prodotto
- `README.md` - Questa documentazione

## Crediti

**Foto prodotto**: [Blaz Erzetic](https://unsplash.com/@blaz_erzetic) su [Unsplash](https://unsplash.com/photos/j9Vr54fl2dI)

## Browser supportati

Funziona su tutti i browser moderni:
- Chrome/Edge (versioni recenti)
- Firefox (versioni recenti)
- Safari (versioni recenti)

## Utilizzo

Apri semplicemente `index.html` nel browser per vedere l'animazione in azione!
