const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const deleteOrderByIdRoute = async (req, res)=>{
    try{
        const { id } = req.params;
        const order = await prisma.order.delete({
            where: {
                id: parseInt(id),
            }
        })
        res.status(200).send(order);
        if(!order){
            res.statusCode(404).send({message:"order not found"})
        }
    }catch (error){
        res.status(404).send("Order with such id is not found")
    }

}

module.exports = {deleteOrderByIdRoute};