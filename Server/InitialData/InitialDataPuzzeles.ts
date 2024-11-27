import fs from "fs";
import bcrypt from "bcrypt";
import Puzzele from "../src/Models/puzzleModel"; // Your User model

/**
 * Encrypts passwords for all users in the provided data array.
 * @param puzzeleData - Array of user objects containing plaintext passwords.
 * @returns A promise that resolves to the user data array with encrypted passwords.
 */
async function encryptPasswords(puzzeleData: any[]) {
  return Promise.all(
    puzzeleData.map(async (puzzele) => {
      if (puzzele.password) {
        // Hash the password using bcrypt
        puzzele.password = await bcrypt.hash(puzzele.password, 10);
      }
      return puzzele;
    })
  );
}

/**
 * Loads initial user data into the database if no users exist.
 * Reads user data from a JSON file, encrypts passwords, and inserts data into the database.
 */
async function loadInitialData() {
  // Read user data from a JSON file
  const puzzeleData = JSON.parse(fs.readFileSync("./data/Puzzels.json", "utf8"));

  // Check if the database is empty
  if ((await Puzzele.countDocuments()) === 0) {
    // Encrypt passwords before inserting into the database
    const encryptedPuzzeleData = await encryptPasswords(puzzeleData);
    await Puzzele.insertMany(encryptedPuzzeleData);
    console.log("Initial users have been added to the database.");
  } else {
    console.log("Users already exist in the database.");
  }
}

export default loadInitialData;
