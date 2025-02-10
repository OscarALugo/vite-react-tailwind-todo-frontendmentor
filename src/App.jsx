import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App  = () =>{
  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white pt-8 px-4 text-4xl font-semibold tracking-[0.3em]"> Todo </h1>
          <button>
            <MoonIcon className="fill-red-600"/>
          </button>
        </div>

        <form className=" flex bg-white rounded-md overflow-hidden py-4 px-4 mt-8 gap-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className=" bg-white px-4 w-full text-gray-400 outline-none" type="text" placeholder="Create a new toDo..." ></input>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">

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

         <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
        
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className=" bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
      
      
    </div>
  )
}

export default App
