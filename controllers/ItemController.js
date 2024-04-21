import itemModel from "../models/ItemModel.js";

//mostrar todos los registros
export const getAllItem = async (req, res) => {
    try{
        const item = await itemModel.findAll()
        res.json(item)
    }
    catch(err){
        res.json({message: err.message})
    }
}

//mostrar un solo registro

export const getItem = async (req, res) => {
    try{
        const item = await itemModel.findAll({
            where: {
                id: req.params.id
            },
        }
        )
        res.json(item[0])
    }
    catch(err){
        res.json({message: error.message})
    }
}

//crear un registro

export const createItem = async (req, res) => {
    try{
        itemModel.create(req.body)
        res.json({message: "Item created"})
    }
    catch(err){
        res.json({message: error.message})
    }
}

//actualizar un registro

export const updateItem = async (req, res) => {
    try{
        itemModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({message: "Item updated"})
    }
    catch(err){
        res.json({message: error.message})
    }
}

//eliminar un registro

export const deleteItem = async (req, res) => {
    try{
        itemModel.destroy({
            where:{
                id: req.params.id
            }
        })
    }
    catch(err){
        res.json({message: error.message})
    }
}
