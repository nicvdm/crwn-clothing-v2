import React from "react";
import ReactDOM from "react-dom/client";
//React Router
import { BrowserRouter } from "react-router-dom";
//Contexts
import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import { ProductsProvider } from "./contexts/products.context";
//app
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
