import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS catagories;`;

async function dropCategoryTable() {
  const res = await query(sqlString);
}

dropCategoryTable();
