import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import ManageProducts from "../pages/ManageProducts";
import Cart from "../pages/Cart";

import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
