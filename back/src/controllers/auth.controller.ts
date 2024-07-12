import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.model";

export const register = async (req: Request, res: Response) => {
  const { email, password, phone, name } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "Erreur ! User already exists" });
    }

    user = new User({ name, phone, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res
      .status(200)
      .json({ msg: "Notif ! User account successfully created and waiting validation by an administrator" });
  } catch (error) {
    console.error("Erreur ! Erreur lors de la création de l'utilisateur :", error);
    res.status(500).send({ msg: "Erreur ! Erreur lors de la création de l'utilisateur" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Erreur ! Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Erreur ! Invalid credentials" });
    }

    if (null == user.role) {
      return res.status(401).json({ msg: "Erreur ! Your account has not yet been validated by the administrator" });
    }

    const payload = {
      user: {
        email: user.email,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_TIME_EXPIRE! }, (err, token) => {
      if (err) throw err;
      res.json({ token, role: user.role });
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};
