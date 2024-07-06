import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"

function SignIn () {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    
    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || ! noAccountInLocalState

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
                    <button 
                        className='bg-black disabled:bg-black/40 w-full h-10 rounded-lg text-white'
                        disabled={!hasUserAnAccount}>
                        Log in
                    </button>
                    <span className='cursor-pointer underline underline-offset-4'>Forgot my password</span>
                    <button 
                        className='border border-black disabled:border-black/40 disabled:text-black/40 w-full h-10 rounded-lg font-semibold'
                        disabled={hasUserAnAccount}
                        onClick={setView('create-user-info')}>
                        Sign up
                    </button>
                </div>
            </>
        )
    }

    const renderCreateUserInfo = () => {
        return (
            <div>Create Account</div>
        )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

    return (
        <Layout>
            <div className='flex flex-col'>
                <h1 className='flex flex-col items-center font-semibold text-2xl m-8'>Welcome</h1>
                {renderView()}
            </div>
        </Layout>
    )
}

export {SignIn}