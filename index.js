import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import { isAuthenticated } from "./middlewares/userAuthenticatedMiddleware.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./dev.env" });

app.use(isAuthenticated);

app.use("/users", userRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} this route`,
  });
});

export default app;
