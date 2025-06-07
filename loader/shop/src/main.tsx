import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Providers } from './shared/Providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      
    </Providers>
  </StrictMode>,
)
