import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  return (
    <main className='bg-zinc-900 h-screen'> //h-screen es para q ocupe el alto de toda la pantalla
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App