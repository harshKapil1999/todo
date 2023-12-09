import { useState } from "react"
import { useTasksDispatch } from "../providers/ContexProvider.jsx";


export default function Addtask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
  return (
    <>
        <input 
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-4 py-2 text-lg w-full rounded-md m-2 text-black"
        />
        <button
            className="px-3 py-2 rounded-md m-2 hover:ring-2 bg-blue-700 active:bg-blue-950 w-full"
            onClick={() => {
                setText('')
                dispatch({
                    type: 'added',
                    id:nextId++,
                    text: text,
                });
            }}>Add</button>   
    </>
  )
}

let nextId = 4;