
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { clearCredentials } from '../redux/authSlice';


const Navbar = () => {
  const userId = localStorage.getItem('userId')
    console.log('the userId is :', userId);
    const dispatch = useDispatch()
    const navigate= useNavigate()

    const handleLogOut = ()=>{
        try {
                dispatch(clearCredentials())
                navigate('/login')
                toast.success('LoggedOut successfully')
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <AppBar position="sticky">
      <Toolbar
                    sx={{
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
          <Typography variant="h6" sx={{ color: '#000', fontWeight: 700 }}>
            LIBRARY MANAGEMENT SYSTEM
          </Typography>
          <Typography  >
                        <div>
                            {userId ? (
                                <div className='border-2 rounded-lg ' onClick={handleLogOut}>

                                <Link to='/admin/login' className='flex justify-between items-center gap-2 font-bold text-red-600 px-2' >
                                    Logout
                                    <FiLogOut />

                                </Link>
                                </div>
                            ) : (
                                <div className='border-2 rounded-lg '>

                                <Link to='/admin/login' className=' font-bold text-[#181818] px-2' >
                                    Login
                                </Link>
                                </div>
                            )}

                        </div>

                    </Typography>

        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar