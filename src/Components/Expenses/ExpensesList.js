import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.filterdExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filterdExpenses.map((data) => (
        <ExpenseItem
          title={data.title}
          amount={data.amount}
          date={data.date}
          key={data.id}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
