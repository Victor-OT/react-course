import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { CheckoutCard } from "../../Components/CheckoutCard"
import { Layout } from "../../Components/Layout"
import { ChevronLeftIcon } from "@heroicons/react/16/solid"

function MyOrder () {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
           <div className='flex justify-between items-center'>
                <Link to='/my-orders'>
                    <ChevronLeftIcon className='size-4'/>
                </Link>
                <h1 className='width-10'>My Order</h1>
           </div>
            <div>
                {
                    context.order?.[index].products.map(product => (
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