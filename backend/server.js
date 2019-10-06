const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/api/messages", (req, res) => {
    
    const messages = [
        { text: "hello", owner: "Matt" },
        { text: "duck!! duck!!", owner: "Ducky" },
        { text: "you shall not pass!", owner: "Gandalf" }
    ];
    res.json(messages);
});

app.listen(4201);