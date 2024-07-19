import { Link, useNavigate } from "react-router-dom";
import { LoginValidation } from "../../validations/yupValidation";
import { useFormik } from "formik";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { setCredentials } from "../../redux/authSlice";

const BASE_URL = 'http://localhost:5000/api/users';

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues,
        validationSchema: LoginValidation,
        onSubmit: async (values) => {
            try {
                const { email, password } = values;
                const response = await axios.post(`${BASE_URL}/login`, { email, password });
                const { token } = response.data;
                const { user } = JSON.parse(atob(token.split('.')[1]));
                dispatch(setCredentials({ token, userId: user.id }));
                toast.success('Login successful');
                navigate('/')
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('An unexpected error occurred,try again later');
                }
            }
        }
    });

    return (
        <div className="border border-[#692a2a] p-3 bg-[#423627] bg-opacity-70 w-[30%] rounded-xl">
            <div className="pb-4 flex justify-center">
                <h3 className="text-white font-bold text-2xl">USER LOGIN</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <span className="text-[15px] p-1 text-white">Email</span>
                <input
                    type="text"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    className="mb-[2px] text-sm w-full rounded-lg py-2 px-3 font-normal text-gray-700 focus:outline-none"
                />
                {errors.email && touched.email && (
                    <div className="text-red-500 text-[12px]">{errors.email}</div>
                )}
                <span className="text-[15px] p-1 text-white">Password</span>
                <input
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    className="mb-[2px] text-sm w-full rounded-lg py-2 px-3 font-normal text-gray-700 focus:outline-none"
                />
                {errors.password && touched.password && (
                    <div className="text-red-500 text-[12px]">{errors.password}</div>
                )}
                <div className="flex flex-col items-center pt-4 justify-center gap-5">
                    <button type="submit" className="bg-black rounded-md h-[40px] w-[110px] text-white">SignIn</button>
                </div>
            </form>
            <div className="flex justify-center text-[13px] pt-2">
                <span className="text-white">
                    Don’t have an account? <Link to="/register" className="text-blue-500 cursor-pointer">SignUp</Link>
                </span>
            </div>
        </div>
    );
};

export default LoginForm;
