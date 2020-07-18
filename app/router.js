const express = require('express');

const controllers = require('./controllers/controller');

const router = express.Router();

router.get('/', controllers.index);
router.post('/', controllers.submitForm);


module.exports = router;