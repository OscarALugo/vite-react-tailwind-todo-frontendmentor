const TodoComputed = ({computedItemsLeft, clearCompleted}) => {

    return(
        <section className="flex justify-between px-4 py-4 bg-white  dark:bg-gray-800 rounded-b-md transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
          </section>
    )
 }

 export default TodoComputed