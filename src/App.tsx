import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import './styles/global.css'

function App() {


  return (
    
    <div className='w-screen h-screen'>
      <div className="w-full flex flex-col gap-16">
        <Header/>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default App
