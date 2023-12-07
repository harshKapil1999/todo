import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
uuidv4();

function TodoList() {

    

  return (
    <div>
      <h1>TodoList</h1>  
        {/* <ul>
            {}
            <Todo id={uuidv4} name={name} completed={false} />    
        </ul>  */}
    </div>
  )
}

export default TodoList