import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'
import './CheckoutSideMenu.css'
import { XMarkIcon } from '@heroicons/react/16/solid'

function CheckoutSideMenu () {
    const context = useContext(ShoppingCartContext)

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
    
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu 
        flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center m-4'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div 
                className='cursor-pointer' 
                onClick={context.closeCheckoutSideMenu}>
                    <XMarkIcon className='size-6'/>
                </div>
            </div>
            <div className='flex-1 w-full overflow-y-scroll'>
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
            </div>
            <button 
                className='w-full py-3 bg-black text-white text-lg font-semibold p-1 rounded-lg mb-4'
                onClick={() => handleCheckout()}>
                    Checkout
            </button>
        </aside>
    )
}

export {CheckoutSideMenu}