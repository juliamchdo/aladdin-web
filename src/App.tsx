import './App.css'
import { Header } from './components/Header'
import { Home } from './screens/Home'
import './styles/global.css'

function App() {


  return (
    
    <div className='w-screen h-screen'>
      <div className="w-full flex flex-col gap-16">
        <Header/>
        <Home/>
      </div>
    </div>
    
  )
}

export default App
