import fs from "fs/promises";
const file = "./users.json";

export async function readUsers() {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function writeUsers(users: any[]) {
  await fs.writeFile(file, JSON.stringify(users, null, 2));
}
