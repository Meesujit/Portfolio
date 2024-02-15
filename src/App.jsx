import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/pages/About'
import Project from './components/pages/Project'
function App() {
   return (    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={< Hero /> } />      
      <Route path="/about" element={< About /> } />      
      <Route path="/project" element={< Project /> } />  
      </Routes>
      </BrowserRouter>
  )
}

export default App
