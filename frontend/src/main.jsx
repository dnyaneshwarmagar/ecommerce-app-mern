import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
