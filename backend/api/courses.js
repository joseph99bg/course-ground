const router = require('express').Router();
const auth = require('../utils/auth');
const controllers = require('../controllers');

router.get('/', controllers.Course.get.all);
router.get('/my-posts', auth(), controllers.Course.get.authorPosts);
router.get('/enrolled', auth(), controllers.Course.get.enrolled);
router.get('/:id', controllers.Course.get.one);

router.post('/create', auth(), controllers.Course.post.create);
router.put('/edit/:id', auth(), controllers.Course.post.edit);
router.put('/enroll/:id', auth(), controllers.Course.post.enroll);
router.delete('/delete/:id', auth(), controllers.Course.post.delete);

module.exports = router;