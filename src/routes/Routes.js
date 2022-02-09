import AllProducts from "../components/AllProducts";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import Cart from "../components/Cart";
import SingleProduct from "../components/common/SingleProduct";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/cart/", element: <Cart /> },
  { path: "/products/", element: <AllProducts /> },
  { path: "/products/p/:id/", element: <SingleProduct /> },
  { path: "/signIn/", element: <SignIn /> },
  { path: "/signUp/", element: <SignUp /> },
  { path: "/*", element: <NotFound /> },
];
