import { selectPlanet } from "../components/select.js";
import { calc } from "../components/buttonCalc.js";
import { planetContainer } from "../components/mainSection.js";

document.addEventListener("DOMContentLoaded", function() {
  selectPlanet();
  calc();
  planetContainer();
});
