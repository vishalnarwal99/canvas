const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const { width, height } = canvas;

const spiralSize = 120;
const size = width / spiralSize;
let x = width / 2, y = height / 2;
let turns = 0, steps = 1;

if (spiralSize % 2 === 0) {
  x += -size / 2, y += size / 2;
}

function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
}

for (let point = 0; point < spiralSize ** 2; point++) {
  const index = +isPrime(point + 1);

  context.beginPath();
  context.arc(x, y, size / 3, 0, Math.PI * 2);
  context.fillStyle = ['#000000', '#ffffff'][index];
  context.fill();

  switch(turns % 4) {
    case 0: x += size; break;
    case 1: y -= size; break;
    case 2: x -= size; break;
    case 3: y += size; break;
  }
  
  if (--steps === 0) {
    steps = Math.floor(++turns / 2) + 1;
  }
}
