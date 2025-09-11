const express = require('express');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/studentRoutes');
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect("mongodb+srv://kishanrachh1118_db_user:KishanRachh1118@mca.ukmpwsi.mongodb.net/?retryWrites=true&w=majority&appName=MCA",
   
);
    app.use('/Songs', studentRoutes);
app.listen(PORT, () => {
    console.log("Server is running :localhost:" + PORT);
});