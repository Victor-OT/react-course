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

    //Search Products by Category
    const [category, setCategory] = useState(null)

    //Filter Products
    const [filteredItems, setFilteredItems] = useState(null)

    const filterItemsByTitle = (items, searchedItem) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchedItem.toLowerCase()))
    }

    const filterItemsByCategory = (items, category) => {
        return items?.filter(item => item.category === category)
    }

    const orderBy = (searchType, items, searchedItem, category) => {
        if (!searchType) {
            return items
        }
        if (searchType === 'BY_TITLE') {
            return filterItemsByTitle(items, searchedItem)
        }
        if (searchType === 'BY_CATEGORY') {
            return filterItemsByCategory(items, category)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterItemsByCategory(items, category).filter(item => item.title.toLowerCase().includes(searchedItem.toLowerCase()))
        }
    }

    useEffect(() => {
        if(!searchedItem && !category) setFilteredItems(orderBy(null, items, searchedItem, category))     
        if(searchedItem && !category) setFilteredItems(orderBy('BY_TITLE', items, searchedItem, category))     
        if(!searchedItem && category) setFilteredItems(orderBy('BY_CATEGORY', items, searchedItem, category))     
        if(searchedItem && category) setFilteredItems(orderBy('BY_TITLE_AND_CATEGORY', items, searchedItem, category))     
    }, [items, searchedItem, category])


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
            setSearchedItem,
            filteredItems,
            setFilteredItems,
            category,
            setCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartProvider}
export {ShoppingCartContext}