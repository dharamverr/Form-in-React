import { useState } from "react";
import Input from "./Input";
import SelectOption from "./SelectOption";

export default function ExpenseForm({ setExpenses ,setExpense,expense,editingRowId,setEditingRowId}) {
  
  const [errors, setErrors] = useState({});
  const validationConfig = {
    title: [
      { required: 'true', message: 'Title is required' },
      {
        minLength: 2,
        message: 'Title should be at least 2 character in length',
      },
    ],
    category: [{ required: 'true', message: 'Please select a Category' }],
    amount: [{ required: 'true', message: 'Please enter an amount' },
      {pattern:/^(0|[1-9]\d*)(\.\d+)?$/ , message:'Please enter only number'}
    ],
  };
  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key,value])=>{
      validationConfig[key].some((rule)=>{
          if(rule.required && !value){
            errorsData[key] = rule.message
            return true
          }

          if(rule.minLength && value.length < rule.minLength){
            errorsData[key] = rule.message
            return true
          }

          if(rule.pattern && !rule.pattern.test(value)){
            errorsData[key] = rule.message
            return true
          }
      })
    })

    setErrors(errorsData);
    return errorsData;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

      if(editingRowId){
        setExpenses((prevState)=> {
          return (prevState.map((prevExpense)=>{
              if(prevExpense.id === editingRowId){
                return {...expense , id:editingRowId}
              }
              return prevExpense
          })
        )})
        setExpense({
          title: "",
          category: "",
          amount: "",
        });
        setEditingRowId('')
        return
      }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }

 
  const handleChange = (e) => {

    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
    setErrors({}); //  setErrors is empty because when user start text in input, error should be hidden
  };

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
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />

      <Input
        id="amount"
        labelName="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}      
      />
      <button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
  );
}
