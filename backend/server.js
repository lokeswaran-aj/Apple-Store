const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!!"));

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () =>
    console.log(`Server running in ${process.env.NODE_ENV} on ${port}`)
);
