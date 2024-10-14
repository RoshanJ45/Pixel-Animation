const createPixel = () => {
const pixel = document.createElement('div');
pixel.classList.add('pixel');
pixel.style.left = `${Math.random() * 100}vw`;
pixel.style.backgroundColor = getRandomColor();
pixel.style.animationDuration = `${Math.random() * 3 + 3}s`;
document.body.appendChild(pixel);setTimeout(() => pixel.remove(), 5000);
};const getRandomColor = () => {
const colors = ['#ff5733', '#33c9ff', '#00ff00', '#ff33f6', '#faff33'];
return colors[Math.floor(Math.random() * colors.length)];
};setInterval(createPixel, 100);
