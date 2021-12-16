const baseAmount = document.querySelector(".initial_price .value");
const cgstField = document.querySelector(".cgst .value");
const sgstField = document.querySelector(".sgst .value");
const totalamount = document.querySelector(".total_amount .value");
const cgstPercent = document.querySelector(".cgst .percent");
const sgstPercent = document.querySelector(".sgst .percent");

function addGst() {
  var initialPrice = document.querySelector("#price").value;
  initialPrice = parseFloat(initialPrice);
  if (initialPrice < 1000) {
    var cgst = 0.025;
    var sgst = 0.025;
  } else if (initialPrice >= 1000) {
    var cgst = 0.06;
    var sgst = 0.06;
  }
  var totalPrice = initialPrice + initialPrice * cgst + initialPrice * sgst;

  baseAmount.innerHTML = initialPrice;
  cgstField.innerHTML = initialPrice * cgst;
  sgstField.innerHTML = initialPrice * sgst;
  totalamount.innerHTML = totalPrice;
  cgstPercent.innerHTML = "(" + cgst * 100 + "%" + ")";
  sgstPercent.innerHTML = "(" + sgst * 100 + "%" + ")";
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  addGst();
});
