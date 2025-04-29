

export default function SelectOption({id,labelName, name ,value ,onChange ,options, defaultOption,error}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{labelName}</label>
        <select
          id={id}
          name={name}
          value={value}          
          onChange={onChange}
        >
          {defaultOption && <option hidden>{defaultOption}</option>}
          {options.map((option , i) => <option key={i} value={option}>{option}</option>)}
         
        </select>
        <p className="error">{error}</p>
      </div>
  )
}
