import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/16/solid'

function ProductDetail () {
    const context = useContext(ShoppingCartContext)
    console.log('Product: ', context.productToShow)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <div 
                className='cursor-pointer' 
                onClick={context.closeProductDetail}>
                    <XMarkIcon className='size-6'/>
                </div>
            </div>
        </aside>
    )
}

export {ProductDetail}