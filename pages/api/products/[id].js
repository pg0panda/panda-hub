import { getProductById } from "../../../lib/products";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "الطريقة غير مسموحة" });
  }
  const product = getProductById(req.query.id);
  if (!product) {
    return res.status(404).json({ error: "المنتج غير موجود" });
  }
  return res.status(200).json(product);
}
