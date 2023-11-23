import './App.css'
import './lib/dayjs'
import './styles/global.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    
    <div className='w-screen h-screen'>
      <div className="w-full flex flex-col">
        <Header/>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default App
