export default function ExpenseForm({setExpenses}) {
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

  return (
    <form className="expense-form"  onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title"/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option hidden>Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
