import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "products.json");

export function getAllProducts() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

export function getProductById(id) {
  return getAllProducts().find((p) => p.id === id) || null;
}

export function saveAllProducts(products) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2), "utf-8");
}

export function addProduct(product) {
  const products = getAllProducts();
  const id = Date.now().toString();
  const newProduct = { id, ...product };
  products.push(newProduct);
  saveAllProducts(products);
  return newProduct;
}

export function updateProduct(id, updates) {
  const products = getAllProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updates, id };
  saveAllProducts(products);
  return products[index];
}

export function deleteProduct(id) {
  const products = getAllProducts();
  const filtered = products.filter((p) => p.id !== id);
  saveAllProducts(filtered);
  return filtered.length !== products.length;
}
