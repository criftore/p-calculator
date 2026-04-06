// math basic function
let fValue = "";
let sValue = "";
let cOp = "";
// add

let vBtn = document.querySelectorAll(".vBtn");
let dCal = document.querySelector(".formDisplay");
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
    if (dCal.value === "...") {
      dCal.value = "";
    }
    const idBtn = this.id;
    const dBtn = this.innerText;

    dCal.value += dBtn;

    console.log(`ID : ${idBtn} Value :${dBtn}`);
  });
});

opBtn.forEach((operate) => {
  operate.addEventListener("click", function () {
    if (dCal.value !== "") {
      fValue = Number(dCal.value);
    }
    cOp = this.innerText;

    dCal.value += "\n" + cOp + " ";

    console.log(`operasi : ${cOp} fValue : ${fValue}`);
  });
});

opValue.addEventListener("click", function () {
  let contentArea = dCal.value.split("\n");
  let sValue = Number(contentArea[1].replace(/[^0-9.]/g, ""));

  let final = operation(cOp, fValue, sValue);

  dCal.value = `${fValue}${cOp}${sValue} \n ${final}`;
  console.log(
    `fValue :${fValue} Operation :${cOp} sValue : ${sValue} hasil :${final}`,
  );
});

cBtn.addEventListener("click", function () {
  dCal.value = "";
  sValue = "";
  cOp = "";
  fValue = "";
});
