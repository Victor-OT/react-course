import { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
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
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-order/${index}`}>
                            <OrdersCard 
                            totalProducts={order.products.length}
                            totalPrice={totalPrice(order.products)} />
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrders}