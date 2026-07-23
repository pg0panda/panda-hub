import { getAllProducts } from "../../../lib/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(getAllProducts());
  }
  return res.status(405).json({ error: "الطريقة غير مسموحة" });
}
