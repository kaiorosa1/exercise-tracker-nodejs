import createConnection from  "../src/database";

import express from "express";
import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use(router)

app.listen(8000, () => console.log("Server is running!"));