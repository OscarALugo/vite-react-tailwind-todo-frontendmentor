import MoonIcon from "./MoonIcon"

const Header = () => { 
    return(
        

      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white pt-8 px-4 text-4xl font-semibold tracking-[0.3em]"> Todo </h1>
          <button>
            <MoonIcon className="fill-red-600"/> 
          </button>
        </div>

      </header>
    )
 }

 export default Header