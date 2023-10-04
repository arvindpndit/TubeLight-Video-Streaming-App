import user from "../assets/user.jpg";

const HeaderProfile = () => {
  return (
    <div className="flex items-center justify-center  ">
        <div className="h-10 flex justify-center items-center px-2   ">
          <div className="hidden lg:block font-bold text-lg text-gray-200 hover:text-gray-400 hover:cursor-pointer">
            Made by Arvind
          </div>
        </div>
        <img
          className="h-10 w-10 rounded-full hover:cursor-pointer  "
          src={user}
          alt="user-icon"
        />
    </div>
  )
}

export default HeaderProfile