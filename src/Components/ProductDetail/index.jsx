import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/16/solid'

function ProductDetail () {
    return (
        <aside className='product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg'>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <XMarkIcon className='size-4'/>
            </div>
        </aside>
    )
}

export {ProductDetail}