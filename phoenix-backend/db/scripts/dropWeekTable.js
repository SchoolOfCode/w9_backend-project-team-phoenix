import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS weeks;`;

async function dropWeeksTable() {
  const res = await query(sqlString);
}

dropWeeksTable();
