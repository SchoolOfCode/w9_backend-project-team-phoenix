import { query } from "../index.js";

async function createWeekTable() {
  const sqlstring = `CREATE TABLE weeks (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    week_number INT,
    catagory_id INT,
    contact_id INT
)`;
  const result = await query(sqlstring);
}

createWeekTable();
