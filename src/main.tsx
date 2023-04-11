import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*
      Use HashRouter becuase I'm using Github page for hosting
     
      To change to BrowswerRouter
        - at vite.config.ts change base to '/'
        - at SearchBar.tsx remove window.location.reload()
          and at e.preventDefault instead (optional If don't want to trigger page reload)
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
