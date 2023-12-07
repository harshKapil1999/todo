import { useState } from "react";

//import Buttons from "./components/Buttons";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  //const [todoName, setTodoName] = useState();

  const addTodo = () => {
        setTodos([...todos, { id: nextId, name: name, completed: false }]);
      };

 /*  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false) */

  function handleSubmit(e) {
    e.preventDefault();
    setNextId((prevState) => prevState + 1);
    if (name) {
      addTodo(name);
      setName("");
    }
  }
  

  function handleEdit(id, todo) {
    setIsEditing(!isEditing);
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  return (
    <div className="w-full h-screen bg-black text-white">
      <h1 className="text-3xl font-bold text-center p-4">To-Do&apos;s</h1>
      <div className="flex flex-col items-center justify-between w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center max-w-2xl w-full"
        >
          <input
            type="textbox"
            placeholder="What i need to do.."
            className="px-4 py-2 text-lg w-full rounded-md m-2 text-black"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="px-3 py-2 rounded-md m-2 hover:ring-2 bg-blue-950 active:bg-blue-700 w-full"
          >
            Add
          </button>
        </form>

        {/* <Buttons /> */}
        <ul className="flex items-center justify-center flex-col mt-5 w-full">
          {todos.length === 0 ? (
            <h1>No Todos yet</h1>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="flex justify-between w-full max-w-xl m-2">
                <div className="flex items-center justify-items-center gap-2">
                  <input id={todo.id} type="checkbox" defaultChecked={todo.completed} onChange={handleComplete}/>
                  {isEditing ? (
                    <input id={todo.id} type="textbox" value={todo.name} /* onChange={() => editTodo(todo)} */ className="text-black text-xl " />
                  ) : (
                    <label htmlFor={todo.id}>{todo.name}</label>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(todo.id, todo)}
                    type="button"
                    className="px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700"
                  >
                  {isEditing ? 'Save': 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    type="button"
                    className="px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
