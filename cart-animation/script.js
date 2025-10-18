class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.currentCurrency = 'EUR';
        this.currentSymbol = '€';
        this.currentRate = 1;
        this.basePrice = 149.99; // Base price in EUR

        this.cartButton = document.querySelector('.cart-button');
        this.cartIcon = document.querySelector('.cart-icon');
        this.cartCount = document.querySelector('.cart-count');
        this.cartPriceEl = document.querySelector('.cart-price');
        this.productPriceEl = document.querySelector('.product-price');
        this.addButton = document.querySelector('.add-to-cart-btn');

        this.init();
    }

    init() {
        // Add event listeners to all "Add to Cart" buttons
        const addButtons = document.querySelectorAll('.add-to-cart-btn');
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => this.addToCart(e));
        });

        // Add event listeners to currency buttons
        const currencyButtons = document.querySelectorAll('.currency-btn');
        currencyButtons.forEach(button => {
            button.addEventListener('click', (e) => this.changeCurrency(e));
        });
    }

    changeCurrency(event) {
        const button = event.currentTarget;
        this.currentCurrency = button.getAttribute('data-currency');
        this.currentSymbol = button.getAttribute('data-symbol');
        this.currentRate = parseFloat(button.getAttribute('data-rate'));

        // Update active state
        document.querySelectorAll('.currency-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Update product price (no decimals for JPY)
        const convertedPrice = this.basePrice * this.currentRate;
        const displayPrice = this.currentCurrency === 'JPY'
            ? Math.round(convertedPrice).toLocaleString('en-US')
            : convertedPrice.toFixed(2);

        this.productPriceEl.textContent = `${this.currentSymbol}${displayPrice}`;
        this.addButton.setAttribute('data-price', convertedPrice);

        // Update cart total
        this.updateCartDisplay();
    }

    addToCart(event) {
        const button = event.currentTarget;
        const price = parseFloat(button.getAttribute('data-price'));
        const name = button.getAttribute('data-name');

        // Add item to cart
        this.items.push({ name, price });
        this.totalPrice += price;

        // Update UI
        this.updateCartDisplay();
        this.animateCartIcon();
        this.animateButton(button);

        // Reset button after delay
        setTimeout(() => {
            button.classList.remove('added');
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add to Cart
            `;
        }, 2000);
    }

    updateCartDisplay() {
        // Update item count
        this.cartCount.textContent = this.items.length;

        // Show count badge if items > 0
        if (this.items.length > 0) {
            this.cartCount.classList.add('show');
        }

        // Update price with animation using current currency
        this.cartPriceEl.classList.add('update');
        const displayTotal = this.currentCurrency === 'JPY'
            ? Math.round(this.totalPrice).toLocaleString('en-US')
            : this.totalPrice.toFixed(2);

        this.cartPriceEl.textContent = `${this.currentSymbol}${displayTotal}`;

        setTimeout(() => {
            this.cartPriceEl.classList.remove('update');
        }, 500);
    }

    animateCartIcon() {
        // Add bounce animation to cart icon
        this.cartIcon.classList.add('bounce');

        setTimeout(() => {
            this.cartIcon.classList.remove('bounce');
        }, 600);
    }

    animateButton(button) {
        // Change button to success state
        button.classList.add('added');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Added!
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ShoppingCart();
});
