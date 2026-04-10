import './App.css'
import Home from './component/Home'
import UseEffectHook from './component/UseEffectHook'
import UseStateHook from './component/UseStateHook'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ul className='ul-link'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/usestatehook">UseState Hook</Link></li>
          <li><Link to="/useeffecthook">UseEffect Hook</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/usestatehook' element={<UseStateHook />}></Route>
          <Route path='/useeffecthook' element={<UseEffectHook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}