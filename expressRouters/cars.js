const express = require('express');
const router = express();

router.get('/',(req, res, next) => {
    res.status(200).send('Cars endpoint')
})

module.exports = router;