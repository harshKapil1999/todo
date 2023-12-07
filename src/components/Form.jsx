import { useState } from 'react'


function Form (addTodo) {

    const [name, setName] = useState('');

   function handleSubmit(e) {
        e.preventDefault();
        if (name) {
            addTodo(name);
            setName('');
        }
    }

  return (
    <form
        onSubmit={handleSubmit} 
        className='flex flex-col items-center justify-center max-w-2xl w-full'
    >
        <input
            type='textbox'
            placeholder='What i need to do..'
            className='px-4 py-2 text-lg w-full rounded-md m-2 text-black'
            value={name}
            onChange={(e) => {
                setName(e.target.value)
            
            }}
        />
        <button type='submit' className='px-3 py-2 rounded-md m-2 hover:ring-2 bg-blue-950 active:bg-blue-700 w-1/2'>Save</button>
    </form>
  )
}

export default Form