/* eslint-disable react/prop-types */



const ActionsButton = ({ color, label }) => {
    return (
        <div>
            <button className={`p-1 rounded-md text-white font-semibold ${color}`}>
                {label}
            </button>
        </div>
    );
}

export default ActionsButton;
