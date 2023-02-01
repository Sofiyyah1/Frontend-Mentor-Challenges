const accordionQuestion = document.querySelectorAll(".accordion__question");

accordionQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      accordionQuestion.forEach((question) =>
        question.parentNode.classList.remove("active")
      );

      question.parentNode.classList.add("active");
    }
  });
});
