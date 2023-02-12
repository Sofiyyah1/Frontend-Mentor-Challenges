const shareIcon = document.querySelector(".share-icon");
const popUP = document.querySelector(".social__pop-up");

shareIcon.addEventListener("click", () => {
  popUP.classList.toggle("active");
});
