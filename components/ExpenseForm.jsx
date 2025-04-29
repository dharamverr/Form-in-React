import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  /***Get form Data with controlled components*******************/
  /**get form data using single state */
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });
  /***Start form Validation ********/
  const [errors , setErrors] = useState({}) 

  const validate = (formData) => {
        const errorsData={}

        if(!formData.title){
          errorsData.title = 'Title is required'
        }

        if(!formData.category){
          errorsData.category ='Please select category'
        }

        if(!formData.amount){
          errorsData.amount =  'Please enter an amount'
        }
        setErrors(errorsData)
        return errorsData
  }
      /********* End form Validation ********/


  function handleSubmit(e) {
    e.preventDefault();
      /** Form validation function used in event handler***/
    const validateResult = validate(expense)    
    if(Object.keys(validateResult).length) return
       /** End Form validation function used in event handler ***/
    setExpenses((prevState)=>[...prevState,{...expense , id:crypto.randomUUID()}])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  
  /** optimization of onChange handler **/
  const handleChange = (e)=>{
    // const {name} = e.target
    // setExpense((prevState)=>({...prevState, [name]: e.target.value}))

    const {name , value} = e.target
    setExpense((prevState)=>({...prevState, [name]: value})) 
    setErrors({})  //  setErrors is empty because when user start text in input, error should be hidden
    }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          // onChange={(e)=>setExpense((prevState)=>({...prevState, title: e.target.value}))}
          onChange={handleChange}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          // onChange={(e)=>setExpense((prevState)=>({...prevState, category: e.target.value}))}
          onChange={handleChange}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          // onChange={(e)=>setExpense((prevState)=>({...prevState , amount: e.target.value}))}
          onChange={handleChange}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
