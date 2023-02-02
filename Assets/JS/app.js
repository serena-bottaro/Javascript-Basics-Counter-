const body = document.querySelector("body");

function createElement(type, classElement, content, parentToAppend) {
  let nameElement = document.createElement(type);
  nameElement.className = classElement;
  nameElement.innerHTML = content;
  parentToAppend.append(nameElement);
  return nameElement;
}

let myNumber = 0;
const container = createElement("div", "container-style", "", body);
const addBtn = createElement("button", "add", "+", container);
const resultBtn = createElement("div", "button-style", myNumber, container);
const removeBtn = createElement("button", "remove", "-", container);
const reset = createElement("button", "reset", "RESET", container);

body.addEventListener("click", (event) => {
  if (event.target.className === "add") {
    resultBtn.innerHTML = myNumber += 1;
  } else if (event.target.className === "remove") {
    resultBtn.innerHTML = myNumber -= 1;
    if (myNumber < 0) {
      resultBtn.style.color = "red";
    }
  } else {
    myNumber = 0;
    resultBtn.innerHTML = myNumber;

    if (myNumber >= 0) {
      resultBtn.style.color = "green";
    }
  }
});
