import { useState } from "react";
import Input from "./Input";
import SelectOption from "./SelectOption";

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
  
      <Input 
        id="title"
        labelName="Title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      
     <SelectOption 
        id="Category"
        labelName="Category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        defaultOption='Select Category'
        options={['Grocery','Clothes','Bills','Education','Medicine']}
     />
     
      <Input 
        id="amount"
        labelName="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
