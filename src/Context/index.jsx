import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext()

function ShoppingCartProvider ({children}) {
    //Get Products
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    //Search Products by Title
    const [searchedItem, setSearchedItem] = useState(null)

    //Filter Products
    const [filteredItems, setFilteredItems] = useState(null)

    const filterItemsByTitle = (items, searchedItem) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchedItem.toLowerCase()))
    }

    useEffect(() => {
        if(searchedItem) setFilteredItems(filterItemsByTitle(items, searchedItem))
    }, [items, searchedItem])

    //Shopping Cart Counter
    const [count, setCount] = useState(0)

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    //Sopping Cart - Add Products to Cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart - Order Checkout
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            order,
            setOrder,
            items,
            searchedItem,
            setSearchedItem
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartProvider}
export {ShoppingCartContext}