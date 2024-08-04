import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
// import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Home/>}></Route>
        {/* <Route path='/sign-in' element={<Signin/>}></Route> */}
        <Route path='/sigin-up' element={<SignUp/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
