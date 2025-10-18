# Password Reveal Animation

Un'animazione moderna e fluida per la funzionalità "mostra password" che rivela i caratteri uno alla volta da sinistra a destra.

## Caratteristiche

- **Rivelazione carattere per carattere**: Quando clicchi sull'icona dell'occhio, i caratteri della password vengono rivelati uno alla volta con un'animazione smooth da sinistra a destra
- **Design moderno**: UI pulita e moderna con gradiente di sfondo e effetti hover
- **Animazioni fluide**: Transizioni smooth su tutti gli elementi interattivi
- **Icona occhio animata**: L'icona cambia stato con una linea di "slash" quando la password è visibile
- **Responsive**: Si adatta perfettamente a diversi dispositivi
- **Accessibile**: Include aria-label per screen reader

## Come funziona

1. Quando l'utente clicca sull'icona dell'occhio:
   - La password viene temporaneamente sostituita con pallini (•)
   - Ogni carattere viene rivelato uno alla volta da sinistra a destra
   - Il delay tra ogni carattere è di 50ms (personalizzabile)
   - Al termine, la password è completamente visibile

2. Quando l'utente clicca nuovamente:
   - La password torna immediatamente al tipo "password" (nascosta)

## Personalizzazione

### Velocità dell'animazione

Nel file `script.js:7`, puoi modificare il delay tra i caratteri:

```javascript
this.revealDelay = 50; // Modifica questo valore (in millisecondi)
```

### Colori

Nel file `style.css`, puoi modificare le variabili CSS:

```css
:root {
    --primary-color: #6366f1;
    --primary-hover: #4f46e5;
    /* ... altre variabili ... */
}
```

### Gradiente di sfondo

Nel file `style.css:20`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Shortcut da tastiera

Premi `Ctrl + Shift + P` (o `Cmd + Shift + P` su Mac) per alternare la visibilità della password.

## File

- `index.html` - Struttura HTML del form di login
- `style.css` - Stili CSS con animazioni
- `script.js` - Logica JavaScript per l'animazione di reveal
- `README.md` - Questa documentazione

## Browser supportati

Funziona su tutti i browser moderni:
- Chrome/Edge (versioni recenti)
- Firefox (versioni recenti)
- Safari (versioni recenti)

## Utilizzo

Apri semplicemente `index.html` nel browser per vedere l'animazione in azione!
