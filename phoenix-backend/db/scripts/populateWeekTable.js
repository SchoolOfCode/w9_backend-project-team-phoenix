import { query } from "../index.js";
import { weeks } from "../../lib/data.js";

async function populateWeekTable() {
  for (let i = 0; i < weeks.length; i++) {
    const response = await query(
      `INSERT INTO weeks (
        week_number, catagory_id, contact_id
        ) VALUES ($1, $2, $3)`,
      [weeks[i].week_number, weeks[i].catagory_id, weeks[i].contact_id]
    );
  }
}

populateWeekTable();
