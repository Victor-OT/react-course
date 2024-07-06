import { useContext, useState, useRef } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"

function MyAccount () {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)
    
    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    const editAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account',stringifiedAccount)
        context.setData(data)
        setView('user-info')
    }

    const renderView = () => {
        if(view === 'user-info') {
            return (
                <div className='flex flex-col w-60'>
                <h1 className='flex items-center justify-center mb-4'>My Account</h1>
                <div className='mb-4'>
                    <p className='flex justify-start items-center gap-2'>
                        <span>Name:</span>
                        <span className='font-semibold'>{parsedAccount.name}</span>
                    </p>
                    <p className='flex justify-start items-center gap-2'>
                        <span>Email:</span>
                        <span className='font-semibold'>{parsedAccount.email}</span>
                    </p>
                </div>

                <button 
                    className='border border-black w-full h-9 rounded-lg font-semibold'
                    onClick={() => setView('edit-user-info')}>
                    Edit
                </button>   
            </div>
            )
        } else {
            return (
                <form 
                ref={form}
                className=' flex flex-col w-60'>
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
                <button 
                        onClick={() => editAccount()}
                        className='w-full h-8 bg-black rounded-lg px-2 pb-1 text-white text-sm'>
                        Edit
                    </button>
            </form>
            )
        }

        console.log('View', view)
    }


    return (
        <Layout>
            {renderView()}
        </Layout>
    )
}

export {MyAccount}