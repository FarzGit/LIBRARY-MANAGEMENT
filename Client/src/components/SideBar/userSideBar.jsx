/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */





const UserSideBar = ({icon,heading}) => {
  return (
    <>
    <div className="flex items-center gap-3 ">
        <span className="text-[#3f3f3f]">
            {icon}
        </span>
        <h6 className="font-semibold text-[#3f3f3f]">
            {heading}
        </h6>
    </div>
    
    </>
  )
}

export default UserSideBar