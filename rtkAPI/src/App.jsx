
import './App.css'
import Users from './features/Users'
import Posts from './features/Posts'
import Todos from './features/Todos'

function App() {

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">RTK Query Example App</h1>
      <Users />
      <Posts />
      <Todos />
    </div>
  )
}

export default App
