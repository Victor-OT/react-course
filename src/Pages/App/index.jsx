import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'

function AppRoutes () {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/all', element: <Home/>},
    {path: '/mens-clothing', element: <Home/>},
    {path: '/womens-clothing', element: <Home/>},
    {path: '/jewelry', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-order/last', element: <MyOrder/>},
    {path: '/my-order/:id', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>},
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
