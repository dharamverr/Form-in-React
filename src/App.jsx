import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "./App.css";
import expenseData from "../components/expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData)
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses}/>
          <ExpenseTable expenses={expenses}/>
         
        </div>
      </main>
    </>
  );
}

export default App;
