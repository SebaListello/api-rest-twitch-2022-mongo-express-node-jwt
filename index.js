import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import linkRouter from "./routes/link.route.js";

const app = express();

const whiteList = process.env.ORIGIN1;

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("😲😲😲 =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// ejemplo back redirect (opcional)

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);

// solo para el ejemplo de login/token
// app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("http://localhost:" + PORT));
