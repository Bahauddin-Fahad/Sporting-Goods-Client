import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary text-white font-semibold h-24 shadow-lg shadow-black sticky top-0 z-20">
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
        <Link to={"/"} className="btn btn-ghost text-xl">
          Real Sports
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-xl">
          <li>
            <Link to={"/all-products"} className="hover:text-red-500">
              All Products
            </Link>
          </li>
          <li>
            <Link to={"/manage-products"} className="hover:text-red-500">
              Manage Products
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="hover:text-red-500">
              Cart
            </Link>
          </li>
          <li>
            <Link to={"/about-us"} className="hover:text-red-500">
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
