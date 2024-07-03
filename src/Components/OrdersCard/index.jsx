function OrdersCard (props) {
    const {totalProducts, totalPrice} = props
    return (
        <div>
            <p>
                <span>01.02.24</span>
                <span>{totalProducts}</span>
                <span>{totalPrice} </span>
            </p>
        </div>
    )
}

export {OrdersCard}