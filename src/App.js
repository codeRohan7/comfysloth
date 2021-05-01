import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  Aboutpage,
  ErrorPage,
  ProductPage,
  SingleProductPage,
  CheckoutPage,
  AuthWrapper,
  Cartpage,
} from './pages'
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <Aboutpage />
        </Route>
        <Route exact path='/products'>
          <ProductPage />
        </Route>
        <Route path='/products/:id' children={<SingleProductPage />} />
        <Route path='/checkout'>
          <CheckoutPage />
        </Route>
        <Route path='/cart'>
          <Cartpage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
