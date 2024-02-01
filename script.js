const inputForm = document.querySelector("form");
const billInput = document.querySelector("#bill-amount");
const customTipInput = document.querySelector("#custom");

const labelComputedTipAmount = document.querySelector("#computed-tip-amount");
const labelComputedTotalAmount = document.querySelector(
  "#computed-total-amount"
);
const numberOfPeopleInput = document.querySelector("#people");

const resetButton = document.querySelector("#reset");

const getTipPercent = function () {
  const selectedTipOption = document.querySelector('input[name="tip"]:checked');
  if (selectedTipOption.id === "percent-custom") {
    return Number(customTipInput.value) <= 100 && Number(customTipInput.value);
  }
  return selectedTipOption.value;
};

const renderOutput = function () {
  const totalTipAmount = (Number(billInput.value) * getTipPercent()) / 100;
  const tipPerPerson = (
    totalTipAmount / (Number(numberOfPeopleInput.value) || 1)
  ).toFixed(2);
  const totalAmountPerPerson = (
    (Number(billInput.value) + totalTipAmount) /
    (Number(numberOfPeopleInput.value) || 1)
  ).toFixed(2);
  labelComputedTipAmount.textContent = tipPerPerson;
  labelComputedTotalAmount.textContent = totalAmountPerPerson;
};

inputForm.addEventListener("input", renderOutput);

resetButton.addEventListener("click", () => {
  labelComputedTipAmount.textContent = (0).toFixed(2);
  labelComputedTotalAmount.textContent = (0).toFixed(2);
});
