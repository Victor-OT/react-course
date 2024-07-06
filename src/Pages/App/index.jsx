import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { initializeLocalStorage, ShoppingCartProvider } from '../../Context'
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
  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an Account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || ! noAccountInLocalState

  //Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut


  let routes = useRoutes([
    {path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    {path: '/all', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    {path: '/mens-clothing', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    {path: '/womens-clothing', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    {path: '/jewelry', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    {path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
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
  initializeLocalStorage()

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
