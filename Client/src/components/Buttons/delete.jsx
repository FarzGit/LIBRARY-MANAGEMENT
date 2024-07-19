/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

const Delete = ({ onDelete }) => {
    const handleDeleteClick = () => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            onDelete();
        }
    };

    return (
        <div className="flex justify-end px-3">
            <span className="cursor-pointer" onClick={handleDeleteClick}>
                <MdDelete size={30} />
            </span>
        </div>
    )
}

export default Delete;
