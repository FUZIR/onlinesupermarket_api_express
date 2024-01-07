const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const getUserOrders = async (req, res)=>  {
    const { id } = req.params;
    const orders = await prisma.order.findMany({
        where: {
            customer_id: parseInt(id),
        },
        include: {
            orderProduct: {
                include: {
                    product: true,
                }
            }

        }

    })
    if (!orders.length) {
        res.status(404).send('Customer with such id not found');
    }else{
        orderSum(orders);
        let totalSum = calculateTotalSum(orders);
        res.status(200).send({ orders, totalSum });
    }
    function orderSum(orders) {
        orders.forEach(order => {
                order.orderProduct.forEach(product => {
                    let orderSum = 0;
                    const amount = product.amount;
                    const price = parseFloat(product.product.price);
                    if (amount && price) {
                        orderSum += amount * price;
                    }
                    return order.orderSum = orderSum + parseFloat(order.delivery_cost);
                })
            }
        )
    }
    function calculateTotalSum(orders) {
        let totalSum = 0;
        orders.forEach(order => {
            totalSum += order.orderSum;
        })
        return orders.totalSum = totalSum;
    }
}

module.exports = {getUserOrders};