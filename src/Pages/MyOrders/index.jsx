import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { totalPrice } from "../../Utils"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders () {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <h1>My Orders</h1>
            <div>
                {
                    context.order.map(order => (
                        <OrdersCard 
                        totalProducts={order.products.length}
                        totalPrice={totalPrice(order.products)}/>
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrders}