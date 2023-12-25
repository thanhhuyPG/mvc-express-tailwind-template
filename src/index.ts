import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import path from "path";
import routers from "./routes";

const app: Application = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/ui")));
app.set("views", path.join(__dirname, "ui"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());

routers(app);

app.listen(3060, () => {
  console.log("Server is running at http://localhost:3060");
});
