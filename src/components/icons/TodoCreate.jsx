const TodoCreate = () => { 
    return(
        <form className=" flex bg-white items-center rounded-md overflow-hidden py-4 px-4 gap-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className=" bg-white px-4 w-full text-gray-400 outline-none" type="text" placeholder="Create a new toDo..." ></input>
        </form>
    )
 }

 export default TodoCreate