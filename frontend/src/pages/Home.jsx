import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/productList";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { ADD_TO_CART } from "../redux/actions";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.items);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Carousel />
      <ProductList products={products} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Home;
