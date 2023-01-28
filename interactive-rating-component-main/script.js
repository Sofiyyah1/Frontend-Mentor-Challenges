const containerFluidRating = document.querySelector(
  ".container__fluid--rating"
);
const conatainerFluidThankYou = document.querySelector(
  ".conatainer__fluid--thank-you"
);
const submitBtn = document.getElementById("submit");

// const rateAgainBtn = document.getElementById("rate-again");
// this for the rate again button in the html file that is commented.

const rateResult = document.getElementById("rate");
const btnRating = document.querySelectorAll(".btn__rating");

submitBtn.addEventListener("click", () => {
  conatainerFluidThankYou.classList.remove("hidden");
  containerFluidRating.style.display = "none";
});

// rateAgainBtn.addEventListener("click", () => {
//   conatainerFluidThankYou.classList.add("hidden");
//   containerFluidRating.style.display = "block";
// });

btnRating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rateResult.innerHTML = rate.innerHTML;
  });
});
