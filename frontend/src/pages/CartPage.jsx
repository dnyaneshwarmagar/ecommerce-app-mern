import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartComponet from "../components/CartComponet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CHANGE_QUANTITY, UPDATE_ORDER_ITEMS } from "../redux/actions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch({ type: UPDATE_ORDER_ITEMS, payload: cartItems });
  }, [cartItems]);

  const changeQuantity = (quantity, item) => {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: { item, quantity }
    });
  };
  return (
    <>
      <Navbar />
      <CartComponet
        cartItems={cartItems}
        order={order}
        changeQuantity={changeQuantity}
      />
      <Footer />
    </>
  );
};

export default CartPage;
