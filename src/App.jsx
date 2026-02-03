import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/'/>
        <Route path='/about'/>
      </Routes>
    </Router>
    
  );
}

export default App
