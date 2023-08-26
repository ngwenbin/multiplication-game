import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Quiz } from './pages'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
)
