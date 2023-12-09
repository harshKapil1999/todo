
import { TasksProvider } from '../providers/ContexProvider.jsx'
import Addtask from './Addtask.jsx'
import TodoList from './TodoList.jsx'

function TodoWrapper() {
  return (
    <>
      <h1 className='mt-5 text-3xl text-center font-bold'>To-Do&apos;s With Contex Provider</h1>
      <div className='h-screen w-full flex flex-col items-center max-w-2xl mx-auto'>
          <TasksProvider>
            
            <Addtask />
            <TodoList />
          </TasksProvider>
      </div>
    </>
    
  )
}

export default TodoWrapper