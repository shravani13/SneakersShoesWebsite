import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {LightDisplayProvider} from './context/lightDisplay'
import { CartProvider } from './context/Cart'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './context/Menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LightDisplayProvider>
    <CartProvider>
    <MenuProvider>
    <App />
    </MenuProvider>
    </CartProvider>
    </LightDisplayProvider>
    
  </StrictMode>,
)
