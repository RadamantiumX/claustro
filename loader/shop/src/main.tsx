import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './shared/Providers'
import { App } from './core/App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
         <App/>
    </Providers>
  </StrictMode>,
)
