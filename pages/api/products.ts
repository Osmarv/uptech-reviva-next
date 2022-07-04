import { NextApiRequest, NextApiResponse } from "next";
import { estoque } from "../../data/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) { 
  return res.status(200).json({
    serverProducts: estoque
  })
}
