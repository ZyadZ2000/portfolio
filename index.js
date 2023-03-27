import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/works", (req, res, next) => {
  res.sendFile(path.join(__dirname, "pages", "works.html"));
});

app.listen(3000);
