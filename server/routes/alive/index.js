import alive from './alive';

const aliveRouter = require('express').Router();

aliveRouter
    .get('/', alive );

export default aliveRouter;
