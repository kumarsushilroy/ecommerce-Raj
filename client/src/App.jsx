import Layout from "./Components/Layout/Layout"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Category from "./Pages/Category"
import Pagenotfound from "./Pages/Pagenotfound"
import Register from "./Pages/Register"
import Cart from "./Pages/Cart"
import Dashboard from "./Pages/User/Dashboard"
import { PrivateRoute } from "./Components/Routes/PrivateRoute"

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='' element={<Dashboard/>} />
          </Route>
          
          <Route path='/login' element={<Login/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
