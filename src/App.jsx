
import './App.css'
import {Navbar} from './components/Navbar'
import {Product} from './components/Product'
import { Hamburger } from './components/Hamburger'

function App() {
  
  return (
    <>
      <div className='relative'>
      <Hamburger />
      <Navbar />
      <Product />
      </div>
      
        
    </>
  )
}

export default App
