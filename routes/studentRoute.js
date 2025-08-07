const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/index1', studentController.index1);
router.get('/show/:id', studentController.show);
router.post('/store', studentController.store);
router.put('/update/:id', studentController.update);
router.delete('/delete/:id', studentController.delete);

module.exports = router;