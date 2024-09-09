import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
