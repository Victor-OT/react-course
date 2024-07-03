function CheckoutCard (props) {
    const {imgUrl, title, price} = props
    return (
        <div className='flex justify-between items-center m-4 gap-8'>
            <div className='flex justify-between items-center gap-2'>
                <figure className='h-20 w-20'>
                    <img 
                    src={imgUrl} 
                alt="product-image"
                className='h-full w-full object-cover rounded-lg' />
                </figure>
                <p className='text-sm w-24'>
                    {title}
                </p>
            </div>
            <div className='flex justify-between items-center gap-2'>
                <p className='text-lg font-medium'>
                    ${price}
                </p>
            </div>
        </div>
    )
}

export {CheckoutCard}