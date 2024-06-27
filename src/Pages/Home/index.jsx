import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

function Home () {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid grid-cols-4 gap-20 w-full max-w-screen-lg'>
                {
                    items?.map(item => (
                        <Card 
                        data={item}
                        key={item.id}
                        />
                    ))
                }   
            </div>
        </Layout>
    )
}

export {Home}