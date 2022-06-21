import { query } from "../index.js";

async function createContactTable() {
  const sqlstring = `CREATE TABLE contacts (
    contact_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    heading TEXT,
    twitter TEXT,
    linkedin TEXT,
    description TEXT
)`;
  const result = await query(sqlstring);
}

createContactTable();
