let totalIncome = Number(prompt("Enter Your Weekly Income")),
  weeklyBudget = document.querySelector("#total"),
  remainBudget = document.querySelector("#left"),
  btn = document.querySelector(".btn-primary"),
  incomeNumber = Number(totalIncome),
  expense = document.querySelector("#expense"),
  amount = document.querySelector("#amount"),
  ul = document.querySelector(".list-group"),
  li = document.createElement("li"),
  span = document.createElement("span"),
  span2 = document.createElement("span");

if (totalIncome !== "" && !isNaN(incomeNumber)) {
  weeklyBudget.textContent = totalIncome;
  remainBudget.textContent = totalIncome;
} else {
  while (totalIncome == "" || isNaN(incomeNumber)) {
    totalIncome = Number(prompt("Make Sure That Your Income Is A Number"));
    incomeNumber = Number(totalIncome);
    if (totalIncome !== "" && !isNaN(incomeNumber)) {
      weeklyBudget.textContent = totalIncome;
      remainBudget.textContent = totalIncome;
    }
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  span.textContent = expense.value;
  span2.textContent = amount.value;
  weeklyBudget = totalIncome;
  newBudget = weeklyBudget -= Number(amount.value);
  remainBudget.innerHTML = newBudget;
  eshgh(expense);
  ul.appendChild(li);
  expense.value = "";
  amount.value = "";
});
function eshgh(expense) {
  li.innerHTML += `<li>${expense.value}${Number(amount.value)}</li>`;
}
