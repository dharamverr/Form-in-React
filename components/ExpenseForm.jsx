import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  /***Get form Data with controlled components*******************/
  /** using individual state ****************************
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('')
 
  function handleSubmit(e) {
    e.preventDefault();
    const expense ={title , category , amount, id:crypto.randomUUID()}
    setExpenses((prevState) => [...prevState , expense])
    setTitle('')
    setCategory('')
    setAmount('')
  } *****************************************************************/
  /**get data using single state */
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prevState)=>[...prevState,{...expense , id:crypto.randomUUID()}])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  /**********Get form data without react(controlled component)*****************
   
   function handleSubmit(e){
        e.preventDefault()       
        //console.log(getFormData(e.target));
        const addNewExpense = {...getFormData(e.target) , id:crypto.randomUUID()}
        setExpenses((prevState)=>[...prevState ,addNewExpense])
        e.target.reset()
    }

  const getFormData = (form) => {
    const formData = new FormData(form);
    const data ={}
    for (const [key ,value] of formData) {
        data[key] = value
      }
    return data
  }
   ***********************************************************************/

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          value={expense.title}
          onChange={(e)=>setExpense((prevState)=>({...prevState, title: e.target.value}))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
          value={expense.category}
          onChange={(e)=>setExpense((prevState)=>({...prevState, category: e.target.value}))}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={amount}
          // onChange={(e) => setAmount(e.target.value)}
          value={expense.amount}
          onChange={(e)=>setExpense((prevState)=>({...prevState , amount: e.target.value}))}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
