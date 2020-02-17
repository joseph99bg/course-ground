const router = require('express').Router();
const auth = require('../utils/auth');
const controllers = require('../controllers');

router.get('/', controllers.Course.get.all);
router.get('/:id', controllers.Course.get.one);
router.post('/my-posts', controllers.Course.get.authorPosts);

router.post('/create', controllers.Course.post.create);
router.put('/edit/:id', controllers.Course.post.edit);
router.delete('/delete/:id', controllers.Course.post.delete);

module.exports = router;