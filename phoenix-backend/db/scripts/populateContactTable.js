import { query } from "../index.js";
import { contactInfo } from "../../lib/data.js";

async function populateContactsTable() {
  for (let i = 0; i < contactInfo.length; i++) {
    const res = await query(
      `INSERT INTO contacts (
        name, twitter, linkedin, description
        ) VALUES ($1, $2, $3, $4)`,
      [
        contactInfo[i].name,
        contactInfo[i].twitter,
        contactInfo[i].linkedin,
        contactInfo[i].description,
      ]
    );
  }
}

populateContactsTable();
