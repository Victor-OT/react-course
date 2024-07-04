import { ChevronRightIcon } from "@heroicons/react/16/solid"

function OrdersCard (props) {
    const {totalProducts, totalPrice} = props
    return (
        <div className='flex justify-between items-center gap-20 border border-black p-2 m-4 rounded-lg '>
            <div className='flex flex-col items-center'>
                <span>01.02.24</span>
                <span>Articles: {totalProducts}</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xl font-semibold'>${totalPrice} </span>
                <ChevronRightIcon className='size-6'/>
            </div>
        </div>
    )
}

export {OrdersCard}