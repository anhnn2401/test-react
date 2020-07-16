import React from 'react'
import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-slick/dist/react-slick.js';
import { renderRouter as RenderRouter } from './routes'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  )
}

export default App
