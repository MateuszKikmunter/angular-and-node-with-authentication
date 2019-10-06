const express = require("express");
const cors = require("cors");
const app = express();

const allowedOrigins = [
    "http://localhost:4200"
];

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
app.get("/api/messages", (req, res) => {

    const messages = [
        { text: "hello", owner: "Matt" },
        { text: "duck!! duck!!", owner: "Ducky" },
        { text: "you shall not pass!", owner: "Gandalf" }
    ];
    res.json(messages);
});

app.listen(4201);