import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS contacts;`;

async function dropContactsTable() {
  const response = await query(sqlString);
}

dropContactsTable();
