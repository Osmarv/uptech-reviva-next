// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { estoque2 } from "../../data/data";
import { NextApiRequest, NextApiResponse } from "next";
import { useCart } from "../../context/CartContext";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("TESTE", req.body);
  
  //if (typeof window !== 'undefined') {
    const obj = localStorage.getItem('products');
    console.log("products 02: ", JSON.stringify(obj));
    if (obj) {
      const products = JSON.parse(obj);
      localStorage.setItem('products', JSON.stringify([...products,req.body]));
    }
    else {
      localStorage.setItem('products', JSON.stringify([req.body]));
    }
  //}

  
  if (req.method === 'POST') {
    res.status(200).json({ data: estoque2 });
  }
    
}
