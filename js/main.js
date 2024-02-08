const button = document.getElementById('btn');
const displayCode = document.getElementById('color-code');
const generateRandomColor = () => {
  let color = '#';
  const hexaDecimal = '0123456789ABCDEF';

  for (let i = 0; i < 6; i += 1) {
    color += hexaDecimal[Math.floor(Math.random() * 16)];
  }

  return color;
};
const changeBackgroundColor = () => {
  const color = generateRandomColor();

  document.body.style.backgroundColor = color;
  displayCode.innerHTML = color;
};

button.addEventListener('click', changeBackgroundColor);
