import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/productList";
import Carousel from "../components/Carousel";
import { ADD_TO_CART } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <>      
      <Carousel />
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
};

export default Home;
