import { createContext, useState, useEffect } from "react";
// import { createProductDocument } from "../utils/firebase.utils";
import PRODUCTS from "../shop-data.json";
//the actual value you want to access
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     console.log(user);
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
