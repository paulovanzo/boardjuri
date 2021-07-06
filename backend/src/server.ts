import express from "express";
import { mongoose } from "@typegoose/typegoose";

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
var db = mongoose.connection;

const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript + Mongoose Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
