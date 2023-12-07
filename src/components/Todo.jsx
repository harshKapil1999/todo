

function Todo(id, name, completed) {
  
  return (
    <li className='flex justify-between w-full max-w-lg m-2'>
      <div className='flex gap-2'>
        <input type="checkbox" 
         defaultChecked={completed}
         id={id} 
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <div className='flex gap-4'>
        <button type='button' className='px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700'>Edit</button>
        <button type='button' className='px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700'>Delete</button>
      </div>
        
    </li>
  )
}

export default Todo