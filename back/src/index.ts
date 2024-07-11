import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import articlesRoutes from "./routes/article.routes";
import eventsRoutes from "./routes/event.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/events", eventsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
