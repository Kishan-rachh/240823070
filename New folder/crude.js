const express = require("express");
const app = express();
const PORT = 80;

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello, BCA Students`);
});

app.get("/show/:id", (req, res) => {
    res.send(`Hello, Student!\nID: ${req.params.id}`);
});

app.post("/store", (req, res) => {
    res.send(`Successfully stored record!\nName: ${req.body.name}, City: ${req.body.city}`);
});

app.put("/update/:id", (req, res) => {
    res.send(`Successfully updated record!\nID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}`);
});

app.delete("/delete/:id", (req, res) => {
    res.send(`Successfully deleted record with ID: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});