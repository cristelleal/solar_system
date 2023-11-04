import { input } from "../components/massInput.js";
import { selectPlanet } from "../components/select.js";
import { descriptionSection } from "../components/description.js";
import { planetContainer } from "./mainSection.js";
import { calculateWeightGravity } from "../scripts/utils.js";

export function calc() {
  const button = document.querySelector("button");

  button.addEventListener("click", function() {
    try {
      const massInKilograms = input().value;
      const planetSelect = selectPlanet();
      const planetGravity = planetSelect.value;
      const informations = descriptionSection();
      const emptyField = ["", " ", "none", 0];
      const selectedOption = planetSelect.options[planetSelect.selectedIndex];
      const planetName = selectedOption.textContent;
      const planetNameLower = selectedOption.textContent.toLowerCase();
      const planetImg = document.querySelector(".planet-image");

      if (emptyField.includes(massInKilograms)) {
        informations.textContent = "Mass is required";
        planetImg.style.display = "none";
        throw new Error();
      }

      if (isNaN(massInKilograms)) {
        informations.textContent = "This is not a number";
        planetImg.style.display = "none";
        throw new Error();
      }

      if (emptyField.includes(planetGravity)) {
        informations.textContent = "You did not choose a planet yet";
        planetImg.style.display = "none";
        throw new Error();
      }

      const weight = calculateWeightGravity();

      informations.innerHTML = `<p>The weight of the object on <b>${planetName}</b></p>
      <span>${weight} N</span>`;
      informations.style.margin = "15% 5% 15% 5%";
      informations.style.padding = "5%";

      planetImg.style.display = "block";
      planetImg.src = `../images/${planetNameLower}.png`;
      const backgroundContainer = planetContainer();
      backgroundContainer.style.display = "flex";
      backgroundContainer.style.flexDirection = "row";
    } catch (err) {
      console.log(err);
    }
  });

  return button;
}
