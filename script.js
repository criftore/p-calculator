// math basic function
let fValue = "";
let sValue = "";
let cOp = "";
let final = "";
// add

let dCal = document.querySelector(".recentDisplay");
let hCal = document.querySelector(".historyDisplay");
let vBtn = document.querySelectorAll(".vBtn");
let opBtn = document.querySelectorAll(".opBtn");

let cBtn = document.querySelector(".cBtn");
let opValue = document.querySelector(".opValue");

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
    } else if (operator === "X") {
      return multiply(fValue, sValue);
    } else if (operator === "/") {
      return divide(fValue, sValue);
    }
  }
};

vBtn.forEach((value) => {
  value.addEventListener("click", function () {
    if (dCal.innerText === "...") {
      dCal.innerText = "";
    }
    const idBtn = this.id;
    const dBtn = this.innerText;

    dCal.innerText += dBtn;

    console.log(`ID : ${idBtn} Value :${dBtn}`);
  });
});

opBtn.forEach((operate) => {
  operate.addEventListener("click", function () {
    if (dCal.innerText !== "") {
      fValue = Number(dCal.innerText);
    }
    cOp = this.innerText;
    hCal.innerText = fValue;
    dCal.innerText = cOp + " ";

    console.log(`operasi : ${cOp} fValue : ${fValue}`);
  });
});

opValue.addEventListener("click", function () {
  let sValue = Number(dCal.innerText.replace(/[^0-9.]/g, ""));

  // let contentArea = dCal.value.split("\n");
  // let sValue = Number(contentArea[1].replace(/[^0-9.]/g, ""));

  final = operation(cOp, fValue, sValue);

  hCal.innerText = fValue + cOp + sValue;

  dCal.innerText = final;

  console.log(`${fValue} ${cOp} ${sValue}`);
});

cBtn.addEventListener("click", function () {
  dCal.innerText = "";
  sValue = "";
  cOp = "";
  fValue = "";
  hCal.innerText = final;
});
