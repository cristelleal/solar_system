import { input } from "../components/massInput.js";
import { selectPlanet } from "../components/select.js";
import { calc } from "../components/buttonCalc.js";
import { planetContainer } from "../components/mainSection.js";

document.addEventListener("DOMContentLoaded", function() {
  const massInput = input();
  const planetInput = selectPlanet();
  const calcButton = calc();
  const mainSection = planetContainer();
});
