const inputForm = document.querySelector("form");
const billInput = document.querySelector("#amount");
const selectedTipOption = document.querySelector('input[name="tip"]:checked');
const customTip = document.querySelector("#custom");

const getTip = function () {
  const selectedTipOption = document.querySelector('input[name="tip"]:checked');
  if (selectedTipOption.id === "percent-custom") {
    return customTip.value;
  }
  return selectedTipOption.value;
};

inputForm.addEventListener("input", () => {
  console.log(getTip());
});
