const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const createProductRoute = async (req, res) =>{
    const { name, category, amount, price } = req.body;
    const product = await prisma.product.create({
        data: {
            name,
            category,
            amount,
            price,
        },
    })
    res.json(product)
}

module.exports = {createProductRoute};