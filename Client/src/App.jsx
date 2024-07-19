import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/User/Login/login"
import Register from "./pages/User/Register/register"
import Home from "./pages/User/Main/home"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./validations/privateRouter";

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <PrivateRoute>

              <Home />
            </PrivateRoute>
          } />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
