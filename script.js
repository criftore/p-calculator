// math basic function
let fValue = "";
let sValue = "";
// add

let vBtn = document.querySelectorAll(".vBtn");
let dCal = document.querySelector(".formDisplay");

vBtn.forEach((value) => {
  value.addEventListener("click", function () {
    if (dCal.value === "...") {
      dCal.value = "";
    }
    const idBtn = this.id;
    const dBtn = this.innerText;
    dCal.value += dBtn;

    console.log(`ID : ${idBtn} Value :${dBtn}`);
  });
});

const add = function (a, b) {
  return a + b;
};
// subtract
const subtract = function (a, b) {
  return a - b;
};

// multiply
const multiply = function (a, b) {
  return a * b;
};

// divide
const divide = function (a, b) {
  return a / b;
};

const operation = function (operator, fValue, sValue) {
  if (fValue === null && fValue === NaN) {
    alert("Masukkan nilai pertama!!!");
  } else {
    if (operator === "+") {
      return add(fValue, sValue);
    } else if (operator === "-") {
      return subtract(fValue, sValue);
    } else if (operator === "*") {
      return multiply(fValue, sValue);
    } else if (operator === "/") {
      return divide(fValue, sValue);
    }
  }
};
