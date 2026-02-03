import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  return (
    <Router>
      <nav>
        <Link></Link>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
  );
}

export default App
