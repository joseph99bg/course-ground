const router = require('express').Router();
const models = require('../models');
const jwt = require('../modules/jwt');
const userRouter = require('./user');
const coursesRouter = require('./courses');
const commentsRouter = require('./comment');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/user', userRouter);

router.use('/course', coursesRouter);

router.use('/comment', commentsRouter);

module.exports = router;