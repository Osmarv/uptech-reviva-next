import React, { createContext, useContext, useState } from "react";
import { Items } from "../data/data";

type PropsCartContext = {
  cart: Items[];
  setCarts: React.Dispatch<React.SetStateAction<Items[]>>;
};

interface Props {
  children: JSX.Element;
}

const DEFAULT_VALUE = {
  cart: [] as Items[],
  setCarts: () => {},
};

const context = createContext<PropsCartContext>(DEFAULT_VALUE);

export const CartContext: React.FC<Props> = ({ children }) => {
  const [cart, setCarts] = useState(DEFAULT_VALUE.cart);
  console.log("cart :>> ", cart);
  return (
    <context.Provider value={{ cart, setCarts }}>
      {children}
    </context.Provider>
  );
};

export const useCart = () => useContext(context);
