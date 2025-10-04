const express = require('express');
const ProductRoute = require('./routes/ProductRoute');
const app = express();
const PORT = 80;
app.use(express.json());

app.use('/Products', ProductRoute);

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});
