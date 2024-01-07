const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const updateEmployeeRoute = async (req, res)=>{
    try{
        const { id } = req.params;
        const { first_name, last_name, middle_name, position } = req.body;
        const employee = await prisma.employer.update({
            where: {
                id: parseInt(id),
            },
            data: {
                first_name,
                last_name,
                middle_name,
                position,
            }
        })
        res.status(200).json(employee);
    }catch (err){
        res.status(404).send("Employee with such id is not found")
    }

}
module.exports = {updateEmployeeRoute};