import express from 'express'
import cors from "cors"
import bodyParser from "body-parser";
import crypto from 'crypto'
import jwt from "jsonwebtoken";

import RoomsRouter from "./Routers/RoomsRouter.js";
import DatesRouter from "./Routers/DatesRouter.js";
import PersonsRouter from "./Routers/PersonsRouter.js"

connectDB();
const app = express()
const port = 3000
const secret = "JIs%WCfS#Sl454d5FX";
const token = jwt.sign({ userId: 1, roles: ["teacher"] }, secret);

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    if (req.body.userName == "malkabr" && req.body.password == "123456") {
        const token = jwt.sign(
            { userId: 1, userName: "malkabr", roles: ["teacher"] }, secret);
        res.send({ accessToken: token });
    } else {
        res.status(401).send({ message: "unauthorized"});
    }
});

app.use("/", (req, res, next) => {
    const token = req.headers.authorization.slice(7);
    console.log("token", token);
    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).send({ message: "unauthorized" });
    }
});

app.get('/', (req, res) => { res.send('Hello myNodeProject!') })
app.use('/rooms', RoomsRouter);
app.use('/persons', PersonsRouter);
app.use('/dates', DatesRouter);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

