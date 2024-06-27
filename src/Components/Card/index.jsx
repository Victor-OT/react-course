function Card () {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative w-full h-4/5 mb-2'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg m-2 px-2 py-0.5 text-sm font-bold'>Electronics</span>
                <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" 
                className='rounded-lg w-full h-full object-cover'/>
                <div className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-white rounded-full m-2 pb-1 text-xl'>+</div>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm'>Headphones</span>
                <span className='font-bold text-lg'>$1500</span>
            </p>
        </div>
    )
}

export {Card}