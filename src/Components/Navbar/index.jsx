import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Navbar () {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || ! noAccountInLocalState

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
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
                        }
                        onClick={() => handleSignOut()}>
                            Sign Out
                        </NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>   
            )
        }
    }

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    return (
        <nav
        className='flex justify-between items-center fixed z-10 top-0 w-full px-8 py-5 text-sm'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-bold'>
                    <NavLink 
                    to={`${isUserSignOut ? '/sign-in' : '/'}`}
                    onClick={() => context.setCategory(null)}>
                        Shoppi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => context.setCategory(null)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all'
                    onClick={() => context.setCategory(null)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/mens-clothing'
                    onClick={() => context.setCategory(`men's clothing`)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/womens-clothing'
                    onClick={() => context.setCategory(`women's clothing`)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelry'
                    onClick={() => context.setCategory(`jewelery`)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setCategory(`electronics`)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                {renderView()}
                <li className='flex gap-1 items-center'>
                    <ShoppingCartIcon className='size-4' />
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}