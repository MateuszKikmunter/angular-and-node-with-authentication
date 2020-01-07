const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const allowedOrigins = [
    "http://localhost:4200"
];

const messages = [
    { id: 1, content: "hello", owner: "Matt" },
    { id: 2, content: "duck!! duck!!", owner: "Ducky" },
    { id: 3, content: "you shall not pass!", owner: "Gandalf" }
];

const users = [];

app.use(bodyParser.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = "The CORS policy for this resource does not allow access from the specified origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const api = express.Router();
const authRouter = express.Router();

api.get("/messages", (req, res) => {
    res.json(messages);
});

api.post("/messages", (req, res) => {
    const message = {
        id: messages.length + 1,
        content: req.body.content,
        owner: req.body.owner
    };
    messages.push(message);
    res.status(201).json(message);
});

authRouter.post("/register", (req, res) => {
    const userAlreadyExists = users.some(user => user.emal === req.body.email);
    if (userAlreadyExists) {
        req.status(500);
    } else {
        const body = req.body;
        const user = {
            id: users.length + 1,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        };
        
        users.push(user);
        res.status(201).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    }
});

app.use("/api", api);
app.use("/auth", authRouter);
app.listen(4201);