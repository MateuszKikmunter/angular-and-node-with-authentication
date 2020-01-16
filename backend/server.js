const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

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
const userRouter = express.Router();

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
    const userAlreadyExists = users.some(user => user.email === req.body.email);
    if (userAlreadyExists) {
        res.status(500).json("User already exists");
    } else {
        const body = req.body;
        const user = {
            id: users.length + 1,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        };

        const response = {
            id: user.id,
            firstName: user.firstName
        };

        users.push(user);
        res.status(200).json({
            user: response,
            token: createToken(response)
        });
    }
});

authRouter.post("/login", (req, res) => {
    const user = users.find(user => user.email === req.body.email);
    if (!user) {
        res.status(404).json("User not found");
    } else {
        if (user.email === req.body.email && user.password === req.body.password) {
            res.status(200).json({ token: createToken(user) });
        } else {
            res.status(500).json("Invalid username or password");
        }
    }
});

const createToken = (user) => {
    return jwt.sign(user.id, "secret");
};

const checkAuthenticated = (req, res, next) => {
    if (!req.header("authorization")) {
        return res.status(401).send("Unauthorized request");
    }

    const token = req.header("authorization").split(" ")[1];
    const payload = jwt.decode(token, "secret");

    if (!payload) {
        return res.status(401).send("Unauthorized request");
    }

    req.userId = payload;
    next();
};

userRouter.get("/me", checkAuthenticated, (req, res) => {
    const user = users.find(user => user.id === parseInt(req.userId));
    if (!user) {
        res.status(404).json("User not found");
    } else {
        res.status(200).json({
            id: user.id,
            firstName: user.firstName
        });
    }
});

app.use("/api", api);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.listen(4201);