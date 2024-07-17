

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/User/Login/login"
import Register from "./pages/User/Register/register"
import Home from "./pages/User/Main/home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
