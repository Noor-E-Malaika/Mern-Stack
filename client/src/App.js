import './App.css';
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>  
    </BrowserRouter>
  )
}

export default App;
