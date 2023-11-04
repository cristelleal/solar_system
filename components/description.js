export function descriptionSection(descriptionText) {
  const description = document.querySelector("#description");

  if (descriptionText) {
    description.classList.add("description");
  }

  return description;
}
