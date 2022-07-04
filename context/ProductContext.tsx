import React, { createContext, useContext, useState } from "react";
import { estoque, Items } from "../data/data";

type PropsProductContext = {
  products: Items[];
  setProducts: React.Dispatch<React.SetStateAction<Items[]>>;
};

interface Props {
  children: JSX.Element;
}

const DEFAULT_VALUE = {
  products: estoque,
  setProducts: () => {},
};

const context = createContext<PropsProductContext>(DEFAULT_VALUE);

export const ProductContext: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState(DEFAULT_VALUE.products);
  console.log("products :>> ", products);

  return (
    <context.Provider value={{ products, setProducts }}>
      {children}
    </context.Provider>
  );
};

export const useProduct = () => useContext(context);
