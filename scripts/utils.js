import input from '../components/massInput';
import selectPlanet from '../components/select';

export default function calculateWeightGravity() {
  const massInKilograms = input().value;
  const earthGravity = 9.81;
  const planetSelect = selectPlanet();
  const planetGravity = planetSelect.value;
  const weight = (massInKilograms * planetGravity) / earthGravity;
  const result = (weight * earthGravity).toFixed(2);

  return result;
}
