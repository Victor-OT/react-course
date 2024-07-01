import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
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
            <div className='flex flex-col items-center'>

            </div>
        </aside>
    )
}

export {CheckoutSideMenu}