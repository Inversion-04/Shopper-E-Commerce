import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Contexts/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  // Wrapping the App component with ShopContextProvider to provide global state
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
)
