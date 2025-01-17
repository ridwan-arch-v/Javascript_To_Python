const p = document.querySelector('p');
const link = document.querySelector('a');
const emoji = document.querySelector('.animation');

function typingEffect(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typingEffect(element, text, index + 1), 100);
    }
}
typingEffect(h1, "404");

setTimeout(() => typingEffect(p, "Oops! Halaman yang kamu cari gak ada."), 500);

link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.3s ease';
});
link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
});

function shakeEmoji() {
    emoji.style.animation = 'shake 0.6s ease-in-out infinite';
}
window.addEventListener('load', shakeEmoji);
