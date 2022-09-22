const allPro = require('../controller/product/allPro')

const router = require('express').Router()

router.post('/', allPro)

module.exports = router
