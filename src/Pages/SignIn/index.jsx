import { Layout } from "../../Components/Layout"

function SignIn () {
    return (
        <Layout>
            <div className='flex flex-col'>
                <h1 className='flex flex-col items-center font-semibold text-2xl m-8'>Welcome</h1>
                <div className='mb-4'>
                    <p className='flex justify-center items-center gap-2'>
                        <span className='text-md'>Email: </span>
                        <span className='font-semibold text-lg'>crowbreaker96@hotmail.com</span>
                    </p>
                    <p>
                        <span className='text-md'>Password: </span>
                        <span className='font-bold text-lg'>*******</span>
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <button className='bg-black w-full h-10 rounded-lg text-white'>
                        Log in
                    </button>
                    <span className='cursor-pointer underline underline-offset-4'>Forgot my password</span>
                    <button className='border border-black w-full h-10 rounded-lg font-semibold'>
                        Sign up
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export {SignIn}