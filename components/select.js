import { planets } from '../scripts/constants';

export default function selectPlanet() {
  const select = document.getElementById('select');

  if (select.hasChildNodes() && select.childElementCount > 1) {
    return select;
  }

  Object.keys(planets).forEach((planet) => {
    const option = document.createElement('option');
    option.textContent = planet.toUpperCase();
    option.value = planets[planet];
    select.appendChild(option);
  });

  return select;
}
