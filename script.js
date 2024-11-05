// Select the floating hearts container
const floatingHeartsContainer = document.querySelector('.floating-hearts');

// Function to create and animate a heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♥';

    // Random size for each heart
    const size = Math.random() * 20 + 30; // Size between 30px and 50px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.fontSize = `${size}px`;

    // Random position across the screen width
    heart.style.left = `${Math.random() * 100}vw`;

    // Set the animation duration and delay for variation
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // 3 to 6 seconds
    heart.style.animationDelay = `${Math.random() * 2}s`; // Delay up to 2 seconds

    // Add the heart to the container
    floatingHeartsContainer.appendChild(heart);

    // Remove the heart after it completes animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Generate hearts at intervals
setInterval(createHeart, 500); // Creates a new heart every 500ms
