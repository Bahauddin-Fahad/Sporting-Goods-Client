import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
type TButtonName =
  | "all-products"
  | "manage-products"
  | "cart"
  | "about"
  | string;

const Navbar = () => {
  const params = useLocation().pathname;

  const [buttonName, setButtonName] = useState<TButtonName>(params.slice(1));

  return (
    <div className="navbar bg-secondary  font-semibold h-24 shadow-lg shadow-black sticky top-0 z-20">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <Link
          to={"/"}
          className="btn btn-ghost text-2xl text-white"
          onClick={() => setButtonName("")}
        >
          <span>Los Blancos</span>
          <span className="text-accent">Sports</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-lg text-white">
          <li
            className={`pb-2 ${
              buttonName === "all-products"
                ? "border-b-2 border-b-accent"
                : "hover:scale-110 duration-300"
            }`}
          >
            <Link
              to={"/all-products"}
              onClick={() => setButtonName("all-products")}
            >
              All Products
            </Link>
          </li>
          <li
            className={`pb-2 ${
              buttonName === "manage-products"
                ? "border-b-2 border-b-accent"
                : "hover:scale-110 duration-300"
            }`}
          >
            <Link
              to={"/manage-products"}
              onClick={() => setButtonName("manage-products")}
            >
              Manage Products
            </Link>
          </li>
          <li
            className={`pb-2 ${
              buttonName === "cart"
                ? "border-b-2 border-b-accent"
                : "hover:scale-110 duration-300"
            }`}
          >
            <Link to={"/cart"} onClick={() => setButtonName("cart")}>
              Cart
            </Link>
          </li>
          <li
            className={`pb-2 ${
              buttonName === "about"
                ? "border-b-2 border-b-accent"
                : "hover:scale-110 duration-300"
            }`}
          >
            <Link to={"/about"} onClick={() => setButtonName("about")}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
