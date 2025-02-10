import activatePixel from "./modules/pageview.js";

activatePixel("../pageview.php");

const buttons = document.querySelectorAll("[data-pixel]");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activatePixel("../click.php");
  });
});
