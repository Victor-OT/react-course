import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Navbar () {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    return (
        <nav
        className='flex justify-between items-center fixed z-10 top-0 w-full px-8 py-5 text-sm'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-bold'>
                    <NavLink 
                    to='/'>
                        Shoppi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    crowbreaker96@hotmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex gap-1 items-center'>
                    <ShoppingCartIcon className='size-4' />
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}