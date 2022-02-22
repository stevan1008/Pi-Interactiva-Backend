const Tarea = require('../models/tarea')

const getAllTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({}).sort('prioridad')
        res.status(200).json({ tareas })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTareasCompletadas = async (req, res) => {
    try {
        const tareas = await Tarea.find({}).select({completada:true})
        res.status(200).json({ tareas })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleTarea = async (req, res) => {
    try {
        const { id: tareaId } = req.params
        const tarea = await Tarea.findOne({_id: tareaId})
        if(!tarea) {
          return res.status(404).json({ message: `tarea con el id:${tareaId} no se encontró` })
        }
        res.status(200).json({ tarea })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTarea = async (req, res) => {
    try {
       const tarea = await Tarea.create(req.body)
       res.status(201).json({ tarea }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTarea = async (req, res) => {
    try {
        const { id: tareaId } = req.params
        const tarea = await Tarea.findOneAndUpdate({ _id:tareaId }, req.body, {
            new: true,
            runValidators: true
        })
        if(!tarea) {
            return res.status(404).json({ message: `tarea con el id:${tareaId} no se encontró` })
        }
        res.status(200).json({ tarea })
    } catch (error) {
        res.status(500).json({ mgs: error })
    }
}

const deleteTarea = async (req, res) => {
    try {
       const { id: tareaId } = req.params
       const tarea = await Tarea.findOneAndDelete({ _id:tareaId }) 
       if(!tarea){
            return res.status(400).json({ message: `tarea con el id: ${tareaId} no se encontró` })
       }
       res.status(200).json({ message: `tarea con el id: ${tareaId} fue exitosamente eliminado` })
    } catch (error){
        res.status(500).json({ msg: error })
    }
}

module.exports = { getAllTareas, getSingleTarea, getTareasCompletadas, createTarea, updateTarea, deleteTarea }