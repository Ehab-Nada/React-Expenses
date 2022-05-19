import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesRender.css";
import ExpensesList from "./ExpensesList";
const ExpensesRender = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (selecedYear) => {
    setSelectedYear(selecedYear);
  };

  let filterdExpenses = props.data.filter(
    (data) => data.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList filterdExpenses={filterdExpenses} />
    </Card>
  );
};
export default ExpensesRender;
