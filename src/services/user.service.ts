import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { readUsers, writeUsers } from "../utils/storage";
import { User } from "../types/user";

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const users = await readUsers();
  const existing = users.find((u: User) => u.email === email);
  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: uuidv4(),
    name,
    email,
    password: hashed,
    balance: 100,
  };
  users.push(newUser);
  await writeUsers(users);
  return { ...newUser, password: undefined! };
}

export async function loginUser(email: string, password: string) {
  const users = await readUsers();
  const user = users.find((u: User) => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return { ...user, password: undefined! };
}

export async function listUsers() {
  const users = await readUsers();
  return users.map(({ password, ...rest }: any) => rest);
}

export async function getUserById(id: string) {
  const users = await readUsers();
  const user = users.find((u: User) => u.id === id);
  if (!user) throw new Error("User not found");
  const { password, ...rest } = user;
  return rest;
}
