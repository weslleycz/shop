import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { setupReactViews } from "express-tsx-views";
import helmet from "helmet";
import { resolve } from "path";
import { router } from "./routes";
import { Props } from "./views/about";
import { PropsRecovery } from "./views/recovery";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger_output.json");

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});

setupReactViews(app, {
    viewsDirectory: resolve(__dirname, "views"),
    prettify: true,
});

app.get("/", (req, res, next) => {
    const data: Props = { title: "About" };
    res.render("about", data);
});

app.get("/recovery", (req, res, next) => {
    const data: PropsRecovery = { title: "About" };
    res.render("recovery", data);
});

app.use(express.json({ limit: "200mb" }));

app.use(router);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server started on port:${process.env.PORT}`);
});
