const express = require('express')
const router = express.Router()

const { getAllTareas, getSingleTarea, getTareasCompletadas, createTarea, updateTarea, deleteTarea } = require('../controllers/tareas')

router.route('/').get(getAllTareas).post(createTarea)
router.route('/completed').get(getTareasCompletadas)
router.route('/:id').get(getSingleTarea).patch(updateTarea).delete(deleteTarea)

module.exports = router