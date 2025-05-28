import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    const user = await userService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    res.json(user);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
}

export async function getAllUsers(req: Request, res: Response) {
  const users = await userService.listUsers();
  res.json(users);
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
}
