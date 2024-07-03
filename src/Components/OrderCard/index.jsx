import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/16/solid'

function OrderCard (props) {
    const {id, imgUrl, title, price} = props
    const context = useContext(ShoppingCartContext)

    const deleteProduct = (id) => {
        const filteredObjects = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredObjects)
        context.setCount(context.count - 1)
    }

    return (
        
        <div className='flex justify-between items-center m-4'>
            <div className='flex justify-between items-center gap-2'>
                <figure className='h-20 w-20'>
                    <img 
                    src={imgUrl} 
                alt="product-image"
                className='h-full w-full object-cover rounded-lg' />
                </figure>
                <p className='text-sm w-24'>
                    {title}
                </p>
            </div>
            <div className='flex justify-between items-center gap-2'>
                <p className='text-lg font-medium'>
                    ${price}
                </p>
                <div
                onClick={() => deleteProduct(id)} 
                className='cursor-pointer'>
                    <XMarkIcon className='size-5'/>
                </div>
            </div>
        </div>
        
    )

}

export {OrderCard}