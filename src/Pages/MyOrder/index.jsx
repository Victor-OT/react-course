import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckoutCard } from "../../Components/CheckoutCard"
import { Layout } from "../../Components/Layout"

function MyOrder () {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            My Order
            <div>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <CheckoutCard 
                        key={product.id}
                        imgUrl={product.image}
                        title={product.title}
                        price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrder} 