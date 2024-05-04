const asyncHandler = require('express-async-handler')
const Data = require('../models/dataModel')

const getData = asyncHandler (async (req, res) => {

    const datos = await Data.find({user: req.user.id}) //filtrar con authtoken para solo mostrar las tareas del usuario
    res.status(200).json(datos)
})

const crearData = asyncHandler (async (req, res) =>{ 

    if(!req.body.nombre || !req.body.apellido || !req.body.empresa || !req.body.correo || !req.body.info){
        res.status(400)
        throw new Error('Faltan datos')
    }

    const dato = await Data.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        empresa: req.body.empresa,
        correo: req.body.correo,
        info: req.body.info,
        user: req.user._id
    })

    res.status(201).json(dato)
})

const updateData = asyncHandler (async (req, res) =>{

    const dato = await Data.findById(req.params.id)

    if(!dato) {
        res.status(404)
        throw new Error('El dato no existe')
    }

    const dataUpdated  = await Data.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(202).json(dataUpdated)
})

const deleteData = asyncHandler (async (req, res) =>{

    const dato = await Data.findById(req.params.id)

    if(!dato) {
        res.status(404)
        throw new Error('El dato no existe')
    }

    await Data.deleteOne(dato)
    res.status(202).json({id: req.params.id})
})

module.exports = {
    getData,
    crearData,
    updateData,
    deleteData
}