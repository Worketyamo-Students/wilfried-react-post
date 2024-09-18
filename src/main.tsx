/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 17/09/2024 - 18:17:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
