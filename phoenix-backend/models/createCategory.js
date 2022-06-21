import { query } from "../db/index.js";

export async function createCategory(category) {
  const res = await query(
    `INSERT INTO catagories (
            catagory_name, title, content, url, img
            ) VALUES ($1, $2, $3, $4, $5)`,
    [
      category.catagory_name,
      category.title,
      category.content,
      category.url,
      category.img,
    ]
  );
}
