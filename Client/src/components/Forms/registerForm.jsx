
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { RegisterValidation } from "../../validations/yupValidation"
// import { useRegisterMutation } from "../../redux/slices/userSlice"
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";




let BASE_URL = 'http://localhost:5000/api/users'

const RegisterForm = () => {

    // const [register] = useRegisterMutation()
    const navigate = useNavigate()



    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    }


    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: RegisterValidation,

        onSubmit: async (values) => {

            try {
                console.log('values',values)
                const {name,email,password} =values
                const res = await axios.post(`${BASE_URL}/register`,{name,email,password})
                console.log(res)

                if(res){
                    toast.success(res.data.message)
                    navigate('/login')
                }
                

            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        },

    })


  return (
    <>
    
    <div className="border border-[#692a2a] p-3 bg-[#423627] bg-opacity-70 w-[30%] rounded-xl">
                <div className="pb-4 flex justify-center" >
                    <h3 className="text-white font-bold text-2xl">USER REGISTRATION</h3>
                </div>
                <form onSubmit={handleSubmit}>
                <span className="text-[15px] p-1 text-white">User Name</span>
                    <input
                        type="text"
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder="User Name"
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none "
                    />
                    {errors.name && touched.name && (
                        <div className="text-red-500 text-[12px]">{errors.name}</div>
                    )}
                    <span className="text-[15px] p-1 text-white">Email</span>
                    <input
                        type="text"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none "
                    />
                    {errors.email && touched.email && (
                        <div className="text-red-500 text-[12px]">{errors.email}</div>
                    )}
                    <span className="text-[15px] p-1 text-white">Password</span>
                    <input
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        name='password'
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none"
                    />
                    {errors.password && touched.password && (
                        <div className="text-red-500 text-[12px]">{errors.password}</div>
                    )}
                    <span className="text-[15px] p-1 text-white">Confirm Password</span>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name='confirmpassword'
                        onChange={handleChange}
                        value={values.confirmpassword}
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none"
                    />
                    {errors.confirmpassword && touched.confirmpassword && (
                        <div className="text-red-500 text-[12px]">{errors.confirmpassword}</div>
                    )}
                    <div className="flex flex-col items-center pt-4 justify-center gap-5">
                        <button type='submit' className="bg-black rounded-md h-[40px] w-[110px]   text-white">SignUp</button>
                    </div>
                </form>
                <div className="flex justify-center text-[13px] pt-2 ">
                    <span className="text-white">
                        Already have an account ?<Link to='/login' className="text-blue-500 cursor-pointer "> SignIn</Link>
                    </span>
                </div>
                
            </div>
    </>
  )
}

export default RegisterForm