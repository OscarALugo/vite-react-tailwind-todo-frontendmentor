import CrossIcon from "./CrossIcon"

const TodoList = () => { 
    return(
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">

          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600b grow">Complete online React course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600b grow">Complete online React course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600b grow">Complete online React course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
        </div>
    )
 }

 export default TodoList