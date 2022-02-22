const express = require('express')
const router = express.Router()

const { getAllTareas, getSingleTarea, createTarea, updateTarea, deleteTarea } = require('../controllers/tareas')

router.route('/').get(getAllTareas).post(createTarea)
router.route('/:id').get(getSingleTarea).patch(updateTarea).delete(deleteTarea)

module.exports = router