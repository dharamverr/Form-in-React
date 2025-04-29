

export default function Input({id,labelName, name ,value ,onChange , error}) {
  return (
    <div className="input-container">
    <label htmlFor={id}>{labelName}</label>
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
    <p className="error">{error}</p>
  </div>
  )
}
