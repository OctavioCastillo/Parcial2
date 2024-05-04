const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

// importar variables
const {getData, crearData, updateData, deleteData} = require('../controles/dataController')

router.route('/').get(protect, getData).post(protect,crearData)
router.route('/:id').put(protect, updateData).delete(protect, deleteData)

module.exports = router