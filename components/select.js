import { planets } from "../scripts/utils.js";

export function selectPlanet() {
  const select = document.getElementById("select");
  select.style.padding = "1% 3% 1% .5%";
  select.style.marginLeft = ".25rem";
  select.style.color = "grey";

  for (const planet in planets) {
    const option = document.createElement("option");
    option.textContent = planet.toUpperCase();
    option.value = planets[planet];
    option.style.color = "grey";
    select.appendChild(option);
  }

  return select;
}
