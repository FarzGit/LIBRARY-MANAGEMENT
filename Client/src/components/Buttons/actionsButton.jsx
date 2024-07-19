/* eslint-disable react/prop-types */



const ActionsButton = ({ color, label,onBorrow }) => {
    const handleClick = () => {
        if (window.confirm("Are you sure you want to borrow this book?")) {
            onBorrow();
        }
    };
    return (
        <div>
            <button onClick={handleClick}className={`p-1 rounded-md text-white font-semibold ${color}`}>
                {label}
            </button>
        </div>
    );
}

export default ActionsButton;
