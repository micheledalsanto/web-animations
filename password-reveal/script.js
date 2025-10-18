class PasswordReveal {
    constructor(inputElement, toggleButton) {
        this.input = inputElement;
        this.toggleBtn = toggleButton;
        this.isRevealing = false;
        this.isVisible = false;
        this.originalValue = '';
        this.actualPassword = this.input.value; // Store actual password
        this.baseDelay = 30; // Base delay in milliseconds
        this.initialDelay = 120; // Starting delay for ease-in effect

        this.init();
    }

    init() {
        // Convert to text type and show bullets from the start
        this.input.type = 'text';
        this.maskPassword();

        this.toggleBtn.addEventListener('click', () => this.handleToggle());

        // Prevent form submission on toggle button click
        this.toggleBtn.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });

        // Prevent user from editing
        this.input.addEventListener('keydown', (e) => {
            e.preventDefault();
        });
    }

    maskPassword() {
        // Show bullets for the password
        this.input.value = '●'.repeat(this.actualPassword.length);
    }

    async handleToggle() {
        if (this.isRevealing) return; // Prevent multiple clicks during animation

        if (this.isVisible) {
            // Hide password immediately
            this.hidePassword();
        } else {
            // Show password with animation
            await this.revealPassword();
        }
    }

    async revealPassword() {
        this.isRevealing = true;
        this.isVisible = true;
        this.toggleBtn.classList.add('active');

        const length = this.actualPassword.length;

        if (!length) {
            this.isRevealing = false;
            return;
        }

        this.input.classList.add('revealing');

        // Small initial pause for smooth start
        await this.sleep(150);

        let revealedChars = '';

        // Reveal characters one by one with ease-in timing
        for (let i = 0; i < length; i++) {
            // Calculate delay with ease-in curve (starts slow, gets faster)
            const progress = i / length;
            const easeIn = 1 - Math.pow(1 - progress, 3); // Cubic ease-in
            const delay = this.initialDelay - (this.initialDelay - this.baseDelay) * easeIn;

            await this.sleep(delay);
            revealedChars += this.actualPassword[i];

            // Build remaining bullets
            const remainingBullets = '●'.repeat(length - i - 1);
            this.input.value = revealedChars + remainingBullets;

            // Add subtle animation effect with fade
            this.animateCharacterReveal(i, progress);
        }

        // Final state - show complete password
        this.input.value = this.actualPassword;

        this.isRevealing = false;
    }

    hidePassword() {
        this.isVisible = false;
        this.toggleBtn.classList.remove('active');

        // Return to masked state
        this.maskPassword();
        this.input.classList.remove('revealing');
    }

    animateCharacterReveal(index, progress) {
        // Gentle pulse effect that gets subtler as animation progresses
        const intensity = 1 - progress * 0.7; // Reduces over time
        this.input.style.transition = 'none';
        this.input.style.transform = `translateX(${0.5 * intensity}px)`;
        this.input.style.opacity = 0.85 + (0.15 * progress);

        setTimeout(() => {
            this.input.style.transition = 'all 0.15s ease-out';
            this.input.style.transform = 'translateX(0)';
            this.input.style.opacity = '1';
        }, 30);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');

    if (passwordInput && toggleButton) {
        new PasswordReveal(passwordInput, toggleButton);
    }
});

// Optional: Add keyboard shortcut (Ctrl/Cmd + Shift + P to toggle)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        const toggleButton = document.querySelector('.toggle-password');
        if (toggleButton) {
            toggleButton.click();
        }
    }
});
