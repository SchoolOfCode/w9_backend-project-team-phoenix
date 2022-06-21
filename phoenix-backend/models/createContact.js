import { query } from "../db/index.js";

export async function createContact(contact) {
    const res = await query(
        `INSERT INTO contacts (
            name, twitter, linkedin, description
            ) VALUES ($1, $2, $3, $4)`,
          [
            contact.name,
            contact.twitter,
            contact.linkedin,
            contact.description
          ]
    )
  }