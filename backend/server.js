const express = require("express");
const app = express();

app.get("/messages", (req, res) => {
    const messages = [
        { text: "hello", owner: "Matt" },
        { text: "duck!! duck!!", owner: "Ducky" },
        { text: "you shall not pass!", owner: "Gandalf" },
        { text: "you shall not pass!", owner: "Gandalf2" },
    ];
    res.json(messages);
});

app.listen(4201);