import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducer";

const Cart = createContext();
faker.seed(123);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price({ min: 299, max: 9999 }),
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr({ category: "product" }),
    isNew: faker.datatype.boolean(0.4),
    inStock: faker.number.int({ min: 0, max: 9 }),
    fastDelivery: faker.datatype.boolean(0.6),
    ratings: faker.number.int({ min: 1, max: 5 }),
    reviews: faker.number.int({ min: 13, max: 300 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byNew: false,
    byFastDel: false,
    bySearch: "",
    byRating: 0,
  });

  return (
    <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
