import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { useTasks, useTasksDispatch } from '../providers/ContexProvider';
uuidv4();

function TodoList() {

 const tasks = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }}
        />
        <button 
          className="px-3 py-1 hover:ring-2 rounded-md bg-blue-700 active:bg-blue-950"
          onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button 
          className="px-3 py-1 hover:ring-2 rounded-md bg-blue-700 active:bg-blue-950"
          onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div className="flex justify-between w-full max-w-xl m-2">

    
    <label>
      <input 
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.value
            }
          })
        }}
      />
      {taskContent}
      <button
        className="px-3 py-1 hover:ring-2 rounded-md bg-blue-700 active:bg-blue-950" 
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
    </div>
  );
}

export default TodoList