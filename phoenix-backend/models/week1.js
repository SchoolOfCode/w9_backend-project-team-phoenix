import { query } from "../db/index.js";

export async function getWeek1Info() {
  const res = await query(`SELECT * FROM weeks 
  FULL JOIN catagories 
  ON weeks.catagory_id = catagories.catagory_id 
  FULL JOIN contacts 
  ON weeks.contact_id = contacts.contact_id
  WHERE week_number = 1
  ORDER BY id;`);
  return res.rows;
}
