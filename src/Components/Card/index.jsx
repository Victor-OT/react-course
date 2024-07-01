import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

function Card (data) {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addCartProducts = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count + 1)
        context.closeProductDetail()
        context.openCheckoutSideMenu()
        console.log('CART: ', context.cartProducts)
    }

    return (
        <div
        onClick={() => showProduct(data.data)} 
        className='bg-white cursor-pointer w-56 h-60 rounded-l mb-12'>
            <figure className='relative w-full h-4/5 mb-2'>
                <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg m-2 px-2 py-0.5 text-sm font-semibold'>{data.data.category}</span>
                <img src={data.data.image} alt={data.data.title} 
                className='rounded-lg w-full h-full object-cover'/>
                <div 
                className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 m-2'
                onClick={(event) => addCartProducts(event, data.data)}>
                    <PlusCircleIcon className='text-black bg-white rounded-full size-6'/>
                </div>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm'>{data.data.title}</span>
                <span className='font-bold text-lg'>${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card}