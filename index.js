const header = document.querySelector("#header");
const background = document.querySelector("#background");
const links = document.querySelectorAll(".link");

background.addEventListener("click", () => {
  header.classList.toggle("active");

  links.forEach((linked) => {
    linked.classList.toggle("active");
  });
});
