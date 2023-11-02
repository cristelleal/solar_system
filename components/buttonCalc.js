import { input } from "../components/massInput.js";
import { selectPlanet } from "../components/select.js";
import { descriptionSection } from "../components/description.js";

export function calc() {
  const button = document.querySelector("button");
  button.style.background = "rgba(128, 128, 128, 0.5)";
  button.style.padding = "1% 3% 1% .5%";
  button.style.marginLeft = ".25rem";
  button.style.border = "1px solid rgba(128, 128, 128, 0.5)";
  button.style.color = "white";
  button.style.fontWeight = "600";

  button.addEventListener("click", function() {
    try {
      const massInKilograms = input().value;
      const planetGravity = selectPlanet().value;
      const earthGravity = 9.81;
      const informations = descriptionSection();
      const emptyField = ["", " ", "none", 0];
      const planetSelect = selectPlanet();
      const selectedOption = planetSelect.options[planetSelect.selectedIndex];
      const planetName = selectedOption.textContent;
      const planetNameLower = selectedOption.textContent.toLowerCase();

      if (emptyField.includes(massInKilograms)) {
        informations.textContent = "Mass is required";
        throw new Error();
      }

      if (isNaN(massInKilograms)) {
        informations.textContent = "This is not a number";
        throw new Error();
      }

      if (emptyField.includes(planetGravity)) {
        informations.textContent = "You did not choose a planet yet";
        throw new Error();
      }

      const weight = (massInKilograms * planetGravity) / earthGravity;
      const roundedWeight = weight.toFixed();

      informations.textContent = `The weight of the object on ${planetName} \n ${roundedWeight}`;

      const planetImg = informations.querySelector(".planet-image");
      planetImg.src = `../images/${planetNameLower}.png`;

      return roundedWeight;
    } catch (err) {
      console.log(err);
    }
  });

  return button;
}
