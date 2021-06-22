import { Request, response, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getUSer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};
export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FRoM users WHERE id=$1", [id]);
  return res.json(response.rows);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email } = req.body;
  try {
    const response = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1,$2)",
      [name, email]
    );
    return res.json({
      message: "user creates succefully",
      body: {
        user: {
          name,
          email,
        },
      },
    });
  } catch (e) {
    return res.status(400).json({ error: e.detail });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  await pool.query("UPDATE users SET name=$1 ,email= $2 WHERE id=$3", [
    name,
    email,
    id,
  ]);
  return res.json({
    message: "user creates succefully",
    body: {
      user: {
        name,
        email,
      },
    },
  });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM users WHERE id=$1", [id]);
  return res.json(`user ${id} deleted successfully`);
};
