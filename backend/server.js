const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const allowedOrigins = [
    "http://localhost:4200"
];

const messages = [
    { text: "hello", owner: "Matt" },
    { text: "duck!! duck!!", owner: "Ducky" },
    { text: "you shall not pass!", owner: "Gandalf" }
];

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

api.get("/messages", (req, res) => {
    res.json(messages);
});

api.post("/messages", (req, res) => {
    messages.push(req.body);
    console.log(req);
    res.sendStatus(200)
});

app.use("/api", api);
app.listen(4201);