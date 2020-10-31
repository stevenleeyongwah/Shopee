const { Router } = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth')
const router = Router();

router.get('/user', authMiddleware.auth, authController.user);
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);

module.exports = router;
