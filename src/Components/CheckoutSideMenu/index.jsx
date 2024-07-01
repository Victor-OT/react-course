import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'
import './CheckoutSideMenu.css'
import { XMarkIcon } from '@heroicons/react/16/solid'

function CheckoutSideMenu () {
    const context = useContext(ShoppingCartContext)
    
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div 
                className='cursor-pointer' 
                onClick={context.closeCheckoutSideMenu}>
                    <XMarkIcon className='size-6'/>
                </div>
            </div>
            <div>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard 
                        key={product.id} 
                        id={product.id} 
                        imgUrl={product.image}
                        title={product.title}
                        price={product.price}
                         />
                    ))
                }
            </div>
            <p className='flex justify-between items-center mx-5'>
                <span>Total: </span>
                <span className='text-lg font font-bold'>
                    {totalPrice(context.cartProducts)}                
                </span>
            </p>
        </aside>
    )
}

export {CheckoutSideMenu}