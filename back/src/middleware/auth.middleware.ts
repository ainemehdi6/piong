import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Récupérer le jeton d'authentification depuis les en-têtes HTTP
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    // Vérifier et décoder le jeton JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; // Assigner les informations utilisateur décodées à req.user
    next();
  } catch (error) {
    console.error("Token error:", error);
    return res.status(401).send("Unauthorized");
  }
};

export default authMiddleware;
