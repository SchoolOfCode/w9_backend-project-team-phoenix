import { query } from "../index.js";
import { contactInfo } from "../../lib/data.js";

async function populateContactsTable() {
  for (let i = 0; i < contactInfo.length; i++) {
    const response = await query(
      `INSERT INTO contacts (
        name, heading, twitter, linkedin, description
        ) VALUES ($1, $2, $3, $4, $5)`,
      [
        contactInfo[i].name,
        contactInfo[i].heading,
        contactInfo[i].twitter,
        contactInfo[i].linkedin,
        contactInfo[i].description,
      ]
    );
  }
}

populateContactsTable();
