import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home () {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card 
                    key={item.id}
                    data={item}/>
                ))
            )
        }
        else {
            return <div>Not Found :( </div>
        } 
    }

    return (
        <Layout>
            <h1 className='mb-4 text-lg font-semibold'>¡Best Store in the World!</h1>
            <input type="text" placeholder="Search a Product"
                className='border border-black rounded-lg focus:outline-none mb-4 px-2'
                onChange={(event) => context.setSearchedItem(event.target.value)} />
            <div className='grid grid-cols-4 gap-2 w-full max-w-screen-lg'>
                {
                    renderView()
                }   
            </div>
            <ProductDetail />
        </Layout>
    )
}

export {Home}