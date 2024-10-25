import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import searchIcon from "../assets/search-icon.svg";
import wishListIcon from "../assets/wishlist-icon.svg";
import cartIcon from "../assets/cart icon.svg";

export function Header() {
  return (
    <div className="flex justify-center mt-1">
      <nav className="flex w-10/12 justify-between">
        <img src={logo} alt="al-fushan" className="logo w-44 " />
        <div className="header w-4/6 flex justify-between text-center">
          <div className="left-header w-44 ">
            <NavLink to="/man" className='text-4xl mr-12'>Men</NavLink>
            <NavLink to="/women" className='text-4xl'>Women</NavLink>
          </div>
          <div className="right-header w-4/6 flex justify-end ml">
            <NavLink>
              <img src={searchIcon} alt="Search" className="search w-16 mr-20" />
            </NavLink>
            <NavLink>
              <img src={wishListIcon} alt="wishList" className="wishList w-16 ml-10" />
            </NavLink>
            <NavLink>
              <img src={cartIcon} alt="cartIcon" className="cartIcon w-16 ml-10" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
