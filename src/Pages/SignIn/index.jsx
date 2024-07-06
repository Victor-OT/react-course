import { useContext, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"

function SignIn () {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)
    
    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || ! noAccountInLocalState

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)
        return <Navigate replace to={'/'} />
    }

    const createAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account',stringifiedAccount)
        context.setData(data)
        handleSignIn()
    }

    const renderLogin = () => {
        return (
            <>
                <div className='mb-4'>
                    <p className='flex justify-start items-center gap-2'>
                        <span className='text-md'>Email: </span>
                        <span className='font-semibold text-lg'>{parsedAccount?.email}</span>
                    </p>
                    <p>
                        <span className='text-md'>Password: </span>
                        <span className='font-bold text-lg'>{parsedAccount?.password}</span>
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <Link to='/'>
                        <button 
                            className='bg-black disabled:bg-black/40 w-60 h-10 rounded-lg text-white'
                            disabled={!hasUserAnAccount}
                            onClick={() => {
                                handleSignIn()
                                context.setCategory(null)
                            }}>
                            Log in
                        </button>
                    </Link>
                    <span className='cursor-pointer underline underline-offset-4'>Forgot my password</span>
                    <button 
                        className='border border-black disabled:border-black/40 disabled:text-black/40 w-full h-10 rounded-lg font-semibold'
                        onClick={() => {
                            setView('create-user-info')
                            context.setCategory(null)
                        }}
                        disabled={hasUserAnAccount}>
                        Sign up
                    </button>
                </div>
            </>
        )
    }

    const renderCreateUserInfo = () => {
        return (
            <form 
                ref={form}
                className=' flex flex-col w-full'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="name">Your name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount?.name}
                        placeholder="Name"
                        className='w-full h-8 border border-black rounded-lg px-2 pb-1 placeholder:text-sm'
                         />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="email">Your email:</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount?.email}
                        placeholder="hellothere@example.com"
                        className='w-full h-8 border border-black rounded-lg px-2 pb-1 placeholder:text-sm'
                         />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="password">Your password:</label>
                    <input 
                        type="text"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount?.pasword}
                        placeholder="******"
                        className='w-full h-8 border border-black rounded-lg px-2 pb-1 placeholder:text-sm'
                         />
                </div>
                <Link to='/'>
                    <button 
                        onClick={() => {
                            createAccount()
                            handleSignIn()
                        }}
                        className='w-full h-8 bg-black rounded-lg px-2 pb-1 text-white text-sm'>
                        Create
                    </button>
                </Link>
            </form>
        )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

    return (
        <Layout>
            <div className='flex flex-col w-60'>
                <h1 className='flex flex-col items-center font-semibold text-2xl m-8'>Welcome</h1>
                {renderView()}
            </div>
        </Layout>
    )
}

export {SignIn}