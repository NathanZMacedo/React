const router = require("express").Router()
const oiController = require('../controllers/oi')

router.get('/oi', oiController.initial)
      .get('/', oiController.doc)

      module.exports = router;