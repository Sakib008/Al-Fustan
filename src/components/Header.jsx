import { NavLink } from "react-router-dom";

import "../Style/header.css";
import logo from "../assets/logo2.png";
import searchIcon from "../assets/search-icon.svg";
import wishListIcon from "../assets/wishlist-icon.svg";
import cartIcon from "../assets/cart icon.svg";

export function Header() {
  return (
    <div className='container mx-auto py-3 pl-12 pr-12'>
      <header className="header flex w-4/5 my-auto mx-auto justify-between ">
        <a href="/" className="logo">
          <img src={logo} alt="Al Fushan" className="w-28" />
        </a>
        <nav className="navbar rounded-3xl border-x-indigo-700 w-2/5 justify-center font-extrabold py-1 text-4xl my-auto flex">
          <ul className="flex">
            <li className="px-8">
              <NavLink>Men</NavLink>
            </li>
            <li className="px-8">
              <NavLink>Women</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex w-1/6 my-auto justify-between">
          <a href="/search" className="headerIcon ">
            <img src={searchIcon} alt="Search " className="w-16" />
          </a>
          <div className="icon w-3/5 flex justify-between">
            <a href="/" className="headerIcon">
              <img src={wishListIcon} alt="WishList" className="w-16" />
            </a>

            <a href="/" className="headerIcon">
              <img src={cartIcon} alt="Cart" className="w-16" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
