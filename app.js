// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}

// Simple Cart Logic
let count = 0;
const cartCountDisplay = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountDisplay.innerText = count;
        
        // Visual feedback
        button.innerText = "Added!";
        button.style.background = "#888";
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.background = "#2d5a27";
        }, 1000);
    });
});