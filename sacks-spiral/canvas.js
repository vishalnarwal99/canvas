const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const { width, height } = canvas;

const spiralRadius = 60;
const size = width / (spiralRadius * 2);

function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
}

context.translate(width / 2, height / 2);

for (let layer = 0; layer < spiralRadius - 1; layer++) {
  const points = 2 * (layer + 1) - 1;

  for (let point = 0; point < points; point++) {
    const angle = -2 * Math.PI * point / points;
    const radius = size * (layer + point / points);

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const index = +isPrime(layer ** 2 + point);

    context.beginPath();
    context.arc(x, y, size / 3, 0, 2 * Math.PI);
    context.fillStyle = ['#000000', '#ffffff'][index];
    context.fill();
  }
}
