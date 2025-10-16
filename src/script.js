function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Represents life, beauty, youth, fragility, and the present moment",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);