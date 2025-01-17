const colorBtn = document.getElementById("color-btn");
const modeType = document.getElementById("mode-type");
const colorInput = document.getElementById("clr-type");
const colorContainer = document.getElementById("color-wrapper");

const BASE_URL = "https://www.thecolorapi.com/scheme";
let isLoading = false;

const generateHTML = () => {
  const results = [];
  for (let i = 1; i <= 5; i++) {
    results.push(`
      <div class="container">
        <div class="inner-container" id="container-${i}"></div>
        <p class="color-code" id="code-${i}"></p>
      </div>`);
  }

  return results.join("");
};

const render = (data) => {
  const { colors } = data;
  colorContainer.innerHTML = generateHTML();

  for (let i = 0; i < colorContainer.children.length; i++) {
    const bgClr = colors[i].hex.value;
    document.getElementById(`container-${i + 1}`).style.backgroundColor = bgClr;
    document.getElementById(`code-${i + 1}`).textContent = bgClr;
  }
};

const fetchColorModes = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => render(data))
    .catch((err) => console.log(err));
};

colorBtn.addEventListener("click", function () {
  const color = colorInput.value.slice(1);
  const mode = modeType.value;
  isLoading = true;

  if (isLoading) {
    colorContainer.innerHTML = `
      <div class="img-container">
        <img class="loader" src="/images/loading.gif" alt="Loading gif"/>
      </div>`;
  }

  setTimeout(function () {
    isLoading = false;
    fetchColorModes(`${BASE_URL}?hex=${color}&mode=${mode}`);
  }, 1500);
});
