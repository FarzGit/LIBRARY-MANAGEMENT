
import { FaUserAlt } from "react-icons/fa";



const UserProfile = () => {
    return (
        <>
            <div className="flex flex-col items-center  gap-5 ">
                <div className="border-4 rounded-xl p-7">

                    <div className="flex flex-col items-center gap-5">
                        <div>
                            <FaUserAlt size={100} />
                        </div>
                        <h3 className="font-bold text-2xl">Farzin ahammed</h3>
                    </div>
                    <hr />
                    <div className="pt-3">
                        <div className="flex flex-col">
                            <h5 >
                                <span className="font-semibold">Email : </span>farzinahammed.in@gmail.com
                            </h5>
                            <h5 >
                            <span className="font-semibold">Mobile : </span>994371305
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile