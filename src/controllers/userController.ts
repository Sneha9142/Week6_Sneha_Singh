import { Request, Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({ username, password, email });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !user.comparePassword(password)) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  res.send(req.user);
};
