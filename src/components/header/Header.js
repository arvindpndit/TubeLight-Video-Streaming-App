import HeaderProfile from "./HeaderProfile";
import Logo from "../ui/Logo";
import SearchBar from "../search/SearchBar";

const Header = () => {
  return (
    <div className="h-14 z-30 flex justify-between px-6 fixed w-full bg-white  ">
      <Logo />
      <SearchBar />
      <HeaderProfile />
    </div>
  );
};

export default Header;
