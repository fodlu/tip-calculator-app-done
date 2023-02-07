const btn = document.querySelectorAll(".btn");
const bill = document.querySelector(".bill");
const custom = document.querySelector(".tipsCustom");
const numberOfPeople = document.querySelector(".noPeople");
const tipAmount = document.querySelector(".tipAmount");
const personAmount = document.querySelector(".personAmount");
const resetBtn = document.querySelector(".reset");
const tip = document.querySelector(".tip");

/* btn.forEach((btns) =>
  btns.addEventListener("click", () => {
    const number = btns.value.slice(0, -1);
    console.log(number);
  })
);
 */
let tips;

tip.addEventListener("click", (e) => {
  btn.forEach((btns) => {
    btns.classList.remove("active");
  });

  e.target.classList.add("active");

  tips = e.target.value.slice(0, -1);
  //   console.log(+tips);

  const customTip = custom.value;
  const bills = Number(bill.value);
  const nop = numberOfPeople.value;
  const percent = Math.round((bills * tips) / 100);
  const total = Math.round(bills + percent);
  const eachPerson = Math.round(total / nop);
  const eachPersonTips = Math.round(eachPerson - bills / nop);

  //   console.log(percent, total, eachPerson, eachPersonTips);
  tipAmount.textContent = `$${eachPersonTips}`;
  personAmount.textContent = `$${eachPerson}`;
});

resetBtn.addEventListener("click", () => {
  bill.value = "";
  custom.value = "";
  numberOfPeople.value = "";
  tipAmount.textContent = `$0.00`;
  personAmount.textContent = `$0.00`;

  btn.forEach((btns) => {
    btns.classList.remove("active");
  });
});
