const express = require("express");
const studentRoute = require('./routes/ProductsRoute.js');
const app = express();
const PORT = 80;
app.use(express.json());

app.use('/Products',ProductsRoute);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});