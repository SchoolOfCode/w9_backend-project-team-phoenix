import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS contacts;`;

async function dropContactsTable() {
  const res = await query(sqlString);
}

dropContactsTable();
