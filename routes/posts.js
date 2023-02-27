const router = require('express').Router()
const { Router } = require('express')
const postsCtrl = require('../controllers/posts.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, postsCtrl.create)

router.put('/:id', checkAuth, postsCtrl.update)

router.delete('/delete/:id', checkAuth, postsCtrl.delete)


module.exports = router