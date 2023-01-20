let container = document.createElement("div");
let addBtn = document.createElement("button");
let resultBtn = document.createElement("div");
let removeBtn = document.createElement("button");
let reset = document.createElement("button");

let myNumber = 0;

document.body.appendChild(container);
container.setAttribute("class", "container-style");

// + Button ------------------------
container.appendChild(addBtn);
addBtn.textContent = "+";
addBtn.setAttribute("class", "button-style");

addBtn.addEventListener("click", function () {
  myNumber += 1;
  resultBtn.innerHTML = myNumber;
  if (myNumber > 0) {
    resultBtn.style.color = "green";
  }
});

// Result Button --------------------
container.appendChild(resultBtn);
resultBtn.textContent = "0";
resultBtn.setAttribute("class", "result-style");

// - Button -------------------------
container.appendChild(removeBtn);
removeBtn.textContent = "-";
removeBtn.setAttribute("class", "button-style");

removeBtn.addEventListener("click", function () {
  myNumber -= 1;
  resultBtn.innerHTML = myNumber;
  if (myNumber < 0) {
    resultBtn.style.color = "red";
  }
});

// Reset Button --------------------
container.appendChild(reset);
reset.textContent = "Reset";
reset.setAttribute("class", "reset-style");

reset.addEventListener("click", function () {
  myNumber = 0;
  resultBtn.innerHTML = myNumber;
  resultBtn.style.color = "green";
});
