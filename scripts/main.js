import { mainTitle } from "../components/mainTitle.js";
import { bodyStyle } from "../components/body.js";
import { headerSection } from "../components/header.js";
import { input } from "../components/massInput.js";
import { selectPlanet } from "../components/select.js";
import { calc } from "../components/buttonCalc.js";
import { planetContainer } from "../components/mainSection.js";

document.addEventListener("DOMContentLoaded", function() {
  const bodyElement = bodyStyle();
  const title = mainTitle();
  const header = headerSection();
  const massInput = input();
  const planetInput = selectPlanet();
  const calcButton = calc();
  const mainSection = planetContainer();
});
