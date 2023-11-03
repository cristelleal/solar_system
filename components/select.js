import { planets } from "../scripts/constants.js";

export function selectPlanet() {
  const select = document.getElementById("select");

  if (select.hasChildNodes() && select.childElementCount > 1) {
    return select;
  }

  for (const planet in planets) {
    const option = document.createElement("option");
    option.textContent = planet.toUpperCase();
    option.value = planets[planet];
    select.appendChild(option);
  }

  return select;
}
