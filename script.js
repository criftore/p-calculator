// Variable in Calculator
let fValue = "";
let sValue = "";
let cOp = "";
let result = "";

//Calculator Display

let nCal = document.querySelector(".nowDisplay");
let rCal = document.querySelector(".recentDisplay");
let hCal = document.querySelector(".historyDisplay");

//Calculator Button
let vBtn = document.querySelectorAll(".vBtn");
let opBtn = document.querySelectorAll(".opBtn");
let rBtn = document.querySelector(".resultBtn");
let dBtn = document.querySelector(".deleteBtn");
let cBtn = document.querySelector(".clearBtn");

//Basic Math Function

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

//Insert vBtn on nCal
vBtn.forEach((value) => {
  value.addEventListener("click", function () {
    if (nCal.innerText === "...") {
      nCal.innerText = "";
    }
    const idBtn = this.id;
    const nBtn = this.innerText;

    nCal.innerText += nBtn;

    console.log(`Value :${nBtn}`);
  });
});

//Implement opBtn on Basic Math Function
const operation = function (operator, fValue, sValue) {
  if (fValue === null || isNaN(fValue)) {
    alert("Masukkan nilai pertama!!!");
  } else {
    if (operator === "+") {
      return add(fValue, sValue);
    } else if (operator === "-") {
      return subtract(fValue, sValue);
    } else if (operator === "X") {
      return multiply(fValue, sValue);
    } else if (operator === "/") {
      return divide(fValue, sValue);
    }
  }
};

//Logic on opBtn
opBtn.forEach((event) => {
  event.addEventListener("click", function () {
    if (fValue !== "" && nCal.innerText !== "" && cOp !== "") {
      sValue = Number(nCal.innerText);
      result = operation(cOp, fValue, sValue);
      fValue = result;
      cOp = this.innerText;
      hCal.innerText = result;
      rCal.innerText = `${fValue} ${cOp} ${sValue}`;
      nCal.innerText = "";
    } else if (nCal.innerText !== "") {
      fValue = Number(nCal.innerText);
      cOp = this.innerText;
      rCal.innerText = `${fValue} ${cOp} ...`;
      nCal.innerText = "";
    } else if (fValue !== "") {
      cOp = this.innerText;
      rCal.innerText = `${fValue} ${cOp} ...`;
      nCal.innerText = "";
    }
  });
});

//Logic on ResultBtn
rBtn.addEventListener("click", function () {
  let sValue = Number(nCal.innerText);
  result = operation(cOp, fValue, sValue);
  rCal.innerText = `${fValue} ${cOp} ${sValue}`;
  nCal.innerText = result;
  fValue = result;
  sValue = "";
  cOp = "";
  console.log(`${fValue} ${cOp} ${sValue} = ${result}`);
});

//Logic on DeteleBtn
dBtn.addEventListener("click", function () {
  nCal.innerText = nCal.innerText.slice(0, -1);
  if (nCal.innerText === "") {
    nCal.innerText = "...";
  }
});

//Logic on ClearBtn
cBtn.addEventListener("click", function () {
  nCal.innerText = "";
  rCal.innerText = "";
  hCal.innerText = "";
  fValue = "";
  sValue = "";
  cOp = "";
});
