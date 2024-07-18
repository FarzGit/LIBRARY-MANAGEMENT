
import { Link } from "react-router-dom"


const RegisterForm = () => {
  return (
    <>
    
    <div className="border border-[#692a2a] p-3 bg-[#423627] bg-opacity-70 w-[30%] rounded-xl">
                <div className="pb-4 flex justify-center" >
                    <h3 className="text-white font-bold text-2xl">USER REGISTRATION</h3>
                </div>
                <form className="">
                <span className="text-[15px] p-1 text-white">User Name</span>
                    <input
                        type="text"
                        name='name'
                        placeholder="User Name"
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none "
                    />
                    <span className="text-[15px] p-1 text-white">Email</span>
                    <input
                        type="text"
                        name='email'
                        placeholder="Email"
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none "
                    />
                    <span className="text-[15px] p-1 text-white">Password</span>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none"
                    />
                    <span className="text-[15px] p-1 text-white">Confirm Password</span>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name='confirmpassword'
                        className="mb-[2px] text-sm w-full  rounded-lg borde py-2 px-3 font-normal text-gray-700  focus:outline-none"
                    />
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