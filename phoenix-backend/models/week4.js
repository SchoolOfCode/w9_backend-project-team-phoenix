import { query } from "../db/index.js";

export async function getWeek4Info() {
  const response = await query(`SELECT * FROM weeks 
  FULL JOIN catagories 
  ON weeks.catagory_id = catagories.catagory_id 
  FULL JOIN contacts 
  ON weeks.contact_id = contacts.contact_id
  WHERE week_number = 4
  ORDER BY id;`);
  return response.rows;
}
