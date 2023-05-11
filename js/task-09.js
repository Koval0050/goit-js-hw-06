function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

const handleChangeColor = () => {
  const randomColor = getRandomHexColor();
  spanRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};

btnRef.addEventListener("click", handleChangeColor);
