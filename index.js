const colorBtn = document.getElementById("color-btn");
const modeType = document.getElementById("mode-type");
const colorInput = document.getElementById("clr-type");

const BASE_URL = "https://www.thecolorapi.com/scheme";
let color;
let mode;

const fetchColorModes = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

colorBtn.addEventListener("click", function () {
  const color = colorInput.value.slice(1);
  const mode = modeType.value;
  fetchColorModes(`${BASE_URL}?hex=${color}&mode=${mode}`);
});
