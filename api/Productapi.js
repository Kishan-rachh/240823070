const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory product list
let products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Tablet", price: 15000 }   
];

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});

// POST new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json(product);
});

// DELETE product
app.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: "Product deleted" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
