import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import ManageProducts from "../pages/ManageProducts";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";

import App from "../App";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
