import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CHANGE_QUANTITY, UPDATE_ORDER_ITEMS } from "../redux/actions";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  const discount = (order.total_cost * order.discount_in_percent) / 100;
  const finalTotal = order.total_cost - discount + order.shipping_charges;

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
    <div className="container mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="col-8 d-flex flex-column m-2">
          {cartItems?.map((item) => (
            <div className="cart-item p-3">
              <div className="d-flex flex-row">
                <img
                  className="col-2 img-fluid"
                  src={`images/${item.image}.jpg`}
                  alt=""
                />
                <div className="col-6 p-2">
                  <h5>{item.name}</h5>
                  <h6>{item.category}</h6>
                  <p>${item.price}</p>
                  <p><b>Quantity:</b> {item.quantity}</p>

                </div>
                <div className="col-2 p-2">
                  Quantity
                  <select
                    name=""
                    id=""
                    onChange={(e) => changeQuantity(e.target.value, item)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#removeItemModal"
                  className="col-2 d-flex justify-content-end align-items-start close"
                >
                  <i className="bi bi-x-circle"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-4 order p-3 m-2">
          <h4>Order Total</h4>
          <div className="d-flex flex-row py-2">
            <input
              type="text"
              className="form-control"
              placeholder="promo code"
            />
            <button className="btn btn-primary">Apply</button>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Total Items</span>
            <span className="billing-cost">{order.total_items}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Item Cost</span>
            <span className="billing-cost">${order.total_cost}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Shipping Cost</span>
            <span className="billing-cost">${order.shipping_charges}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">
              Discount ({order.discount_in_percent}%)
            </span>
            <span className="billing-cost">-${discount}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item fs-5">Total Cost</span>
            <span className="billing-cost fs-5">${finalTotal}</span>
          </div>

          <div className="d-flex mt-3">
            <Link to="/checkout" className="btn btn-primary flex-grow-1">
              Pay Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
