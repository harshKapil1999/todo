

function Buttons() {
  return (
    <div className='flex gap-8 w-full items-center justify-center'>
        <button className='px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700'>All</button>
        <button className='px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700'>To Complete</button>
        <button className='px-3 py-1 hover:ring-2 rounded-md bg-blue-950 active:bg-blue-700'>Completed</button>
    </div>
  )
}

export default Buttons