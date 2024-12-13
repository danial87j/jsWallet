let totalIncome = prompt("Enter Your Weekly Income"),
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
    totalIncome = prompt("Make Sure That Your Income Is A Number");
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
  li.appendChild(span);
  li.appendChild(span2);
  ul.appendChild(li);
  expense.value = "";
  amount.value = "";
});
