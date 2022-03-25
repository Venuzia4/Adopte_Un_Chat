/**
 * Cache tous les liens vers les associations
 */
const hideAssociationsLinks = () => {
  document.querySelectorAll(".association-external-links").forEach((element) => {
    element.classList.add("d-none");
  })
}

// Lorsqu'on sélectionne une association
document
  .querySelector("[name='association']")
  .addEventListener("change", (event) => {
    hideAssociationsLinks();
    document.querySelector(`#${event.target.value}`).classList.remove("d-none");
  });
