import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/Products/AllProducts";
import ManageProducts from "../pages/Products/ManageProducts";
import Cart from "../pages/Cart";

import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ProductDetails from "../pages/Products/ProductDetails";
import CategoryProducts from "../pages/Products/CategoryProducts";

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
        path: "products/cat/:categoryId",
        element: <CategoryProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
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
