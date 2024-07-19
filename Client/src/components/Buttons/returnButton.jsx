/* eslint-disable react/prop-types */





const ReturnButton = ({onReturn}) => {

  const handleReturnClick = () => {
    if (window.confirm("Are you sure you want to Accept this book?")) {
      onReturn();
    }
};
  return (
    <>
    <div>
        <button className="bg-[#fc3232] text-white font-bold p-2 rounded-lg px-4" onClick={handleReturnClick}>
            Return
        </button>
    </div>
    
    </>
  )
}

export default ReturnButton