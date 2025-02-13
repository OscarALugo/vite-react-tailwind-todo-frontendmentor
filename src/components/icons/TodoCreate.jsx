import { useState } from "react"

const TodoCreate = ({createTodo}) => { 

  const [title, setTitle] = useState('')

  const handleSubmitAddTodo = (e) =>{
    e.preventDefault()
    console.log(title)

    if(!title.trim()){
      return setTitle("")
    }

    createTodo(title)   
    setTitle("")
    }


  return(
      <form onSubmit={handleSubmitAddTodo} className="flex bg-white dark:bg-gray-800 transition-all duration-1000 items-center rounded-md overflow-hidden py-4 px-4 gap-4">

        <span
          className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
          className=" bg-white  dark:bg-gray-800 transition-all duration-1000 px-4 w-full text-gray-400 outline-none"
          type="text"
          placeholder="Create a new toDo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ></input>

      </form>
  )
 }

 export default TodoCreate