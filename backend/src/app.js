import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}));

// Standard middleware for parsing JSON and Form data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes Import
import contactRouter from "./routes/contact.routes.js";

// Routes Declaration
app.use("/api/v1", contactRouter);

export { app };

