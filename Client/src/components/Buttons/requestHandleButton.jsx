/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";


const RequestHandleButton = ({onAccept,onReject}) => {
    const handleAcceptClick = () => {
        if (window.confirm("Are you sure you want to Accept this book?")) {
            onAccept();
        }
    };
    const handleRejectClick = () => {
        if (window.confirm("Are you sure you want to Reject this book?")) {
            onReject();
        }
    };
    return (

        <>
            <div className="flex justify-end gap-3 ">
                <div className="bg-[#42ff71] rounded-lg px-1 cursor-pointer" onClick={handleAcceptClick}>
                    <span>
                        <TiTick size={40} />
                    </span>
                </div>
                <div className="bg-[#fc5656] rounded-lg p-2 cursor-pointer" onClick={handleRejectClick}>
                    <span>
                        <ImCross size={30} />

                    </span>
                </div>
            </div>
        </>
    )
}

export default RequestHandleButton