const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello Rameez"
    })
});

app.listen(5000, () => {
    console.log("Server running")
})