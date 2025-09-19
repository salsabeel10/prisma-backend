const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

exports.createCategory = async(req,res)=>{
    try{
        if(!req.body.name) {
            return res.status(422).json({error:"Name is Req For Category"})
        }

        const newCategory = await prisma.category.create({
            data: {
                name: req.body.name
            }
        })

        return res.status(201).json({newCategory})

    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

exports.getCategory = async(req,res)=>{
    try{
        const allCategories = await prisma.category.findMany();

        return res.status(201).json({allCategories})

    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

exports.deleteCategory = async(req,res)=>{
    try {
        const {id} =req.params;
        const deleteCategory =await prisma.category.delete({
            where:{id:parseInt(id)}
        })

        return res.status(200).json({
            message: "category deleted Sucessfully",
            deleteCategory
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}