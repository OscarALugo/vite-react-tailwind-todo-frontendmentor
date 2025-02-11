import Header from "./components/icons/Header"
import TodoCreate from "./components/icons/TodoCreate"
import TodoList from "./components/icons/TodoList"
import TodoComputed from "./components/icons/TodoComputed"
import TodoFilter from "./components/icons/TodoFilter"

const App  = () =>{
  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8">

        <TodoCreate />

        <TodoList />
        
        <TodoComputed />

        <TodoFilter />
        
      </main>

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
      
    </div>
  )
}

export default App
