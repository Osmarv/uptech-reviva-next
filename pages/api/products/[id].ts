// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { estoque } from "../../../data/data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = estoque.find((p) => p.id == Number(req.query.id));
  res.status(200).json({ data: product });
}
