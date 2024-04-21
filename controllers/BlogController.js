import blogModel from "../models/BlogModel.js";

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogModel.findAll()
        res.json(blogs)
    }
    catch(err){
        res.json({message: error.message})
    }
}
//mostrar un solo registro

export const getBlog = async (req, res) => {
    try{
        const blog = await blogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blog[0])
    }
    catch(err){
        res.json({message: error.message})
    }
}

//crear un registro

export const createBlog = async (req, res) => {
    try{
        blogModel.create(req.body)
        res.json({message: "Blog created"})

    }
    catch(err){
        res.json({message: error.message})
    }
}

//actualizar un registro

export const updateBlog = async (req, res) => {
    try{
        blogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({message: "Blog updated"})
    }
    catch(err){
        res.json({message: error.message})
    }
}

//eliminar un registro

export const deleteBlog = async (req, res) => {
    try{
        blogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({message: "Blog deleted"})
    }
    catch(err){
        res.json({message: error.message})
    }
}