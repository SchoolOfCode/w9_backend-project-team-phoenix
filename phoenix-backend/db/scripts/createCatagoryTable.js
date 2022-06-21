import { query } from "../index.js";

async function createCatagoryTable() {
  const sqlstring = `CREATE TABLE catagories (
    catagory_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    catagory_name TEXT,
    title TEXT,
    content TEXT,
    url TEXT,
    img TEXT
)`;
  const result = await query(sqlstring);
}

createCatagoryTable();
