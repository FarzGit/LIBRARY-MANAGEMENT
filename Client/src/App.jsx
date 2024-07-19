import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/User/Login/login"
import Register from "./pages/User/Register/register"
import Home from "./pages/User/Main/home"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./validations/privateRouter";
import AdminLogin from "./pages/Admin/Login/login";
import AdminMain from "./pages/Admin/Main/main";
import AdminPrivateRoute from "./validations/adminPrivateRoute";

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

          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin" element={
            <AdminPrivateRoute>
              <AdminMain/>
            </AdminPrivateRoute>
            } />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
