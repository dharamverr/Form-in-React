export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const {amount,category,title} = expenses.find((expense)=> expense.id === rowId)
          //console.log({amount,category,title});
          setExpense({amount,category,title})
          setMenuPosition({});
          setEditingRowId(rowId)
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState)=> prevState.filter((expense)=> expense.id != rowId))
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
