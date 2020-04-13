import alive from './alive';

const router = require('express').Router();

router.use("/alive", alive);

module.exports = router;
