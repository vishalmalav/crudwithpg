import { json } from "body-parser";
import express from "express";
import indexRouter from "./routes/routes.index";

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

app.listen(3000, () => {
  console.log("server on port", 3000);
});
