import './App.css'
import Home from './component/Home'
import UseEffectHook from './component/UseEffectHook'
import UseMemoHook from './component/UseMemoHook'
import UseRefHook from './component/UseRefHook'
import UseStateHook from './component/UseStateHook'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UseContextHook from './component/UseContextHook'
import ThemeProvider from './component/ThemeProvider'
import UseReducerHook from './component/UseReducerHook'
import UseCallBackHook from './component/UseCallBackHook'
import UseIdHook from './component/UseIdHook'

export default function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <ul className='ul-link'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/usestatehook">UseState Hook</Link></li>
            <li><Link to="/useeffecthook">UseEffect Hook</Link></li>
            <li><Link to="/userefhook">UseRef Hook</Link></li>
            <li><Link to="/usememohook">UseMemo Hook</Link></li>
            <li><Link to="/usecontexthook">UseContext Hook</Link></li>
            <li><Link to="/usereducerhook">UseReducer Hook</Link></li>
            <li><Link to="/usecallbackhook">UseCallBack Hook</Link></li>
            <li><Link to="/useidhook">UseId Hook</Link></li>
          </ul>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/usestatehook' element={<UseStateHook />}></Route>
            <Route path='/useeffecthook' element={<UseEffectHook />}></Route>
            <Route path='/userefhook' element={<UseRefHook />}></Route>
            <Route path='/usememohook' element={<UseMemoHook />}></Route>
            <Route path='/usecontexthook' element={<UseContextHook />}></Route>
            <Route path='/usereducerhook' element={<UseReducerHook />}></Route>
            <Route path='/usecallbackhook' element={<UseCallBackHook />}></Route>
            <Route path='/useidhook' element={<UseIdHook />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}