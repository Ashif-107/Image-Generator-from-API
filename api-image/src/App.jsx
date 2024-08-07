import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pic from "./components/Pic";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Pic/>}/>
      </Routes>
        
    </Router>
  )
}

export default App
