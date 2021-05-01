import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  issidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  singleproducts_loading: false,
  singleproducts_error: false,
  singleproduct: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispact] = useReducer(reducer, initialState)
  const opensidebar = () => {
    dispact({ type: SIDEBAR_OPEN })
  }
  const closesidebar = () => {
    dispact({ type: SIDEBAR_CLOSE })
  }

  const fetchproducts = async (url) => {
    dispact({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data
      dispact({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispact({ type: GET_PRODUCTS_ERROR })
    }
  }
  const fetchsingle_product = async (url) => {
    dispact({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const singleproduct = response.data
      dispact({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleproduct })
    } catch (error) {
      dispact({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }
  useEffect(() => {
    fetchproducts(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, opensidebar, closesidebar, fetchsingle_product }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
