import { query } from "../index.js";
import { catagories } from "../../lib/data.js";

async function populateCatagoriesTable() {
  for (let i = 0; i < catagories.length; i++) {
    const response = await query(
      `INSERT INTO catagories (
        catagory_name, title, content, url, img
        ) VALUES ($1, $2, $3, $4, $5)`,
      [
        catagories[i].catagory_name,
        catagories[i].title,
        catagories[i].content,
        catagories[i].url,
        catagories[i].img,
      ]
    );
  }
}

populateCatagoriesTable();
