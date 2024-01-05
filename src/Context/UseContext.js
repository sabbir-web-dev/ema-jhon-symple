import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducer";


export const ShopContex = createContext({});

const ShopProvider = ({children}) => {


  const [state, dispatch] = useReducer(reducer,initialState);
  const value = {
    products : state.products,
    user:state.user,
    selectProduct: state.selectProduct,
    addProduct:(product) => {
      dispatch({type:"ADD_PRODUCT",payload:product})
    },
    removeProduct:(product) => {
      dispatch({type:"REMOVE_PRODUCT",payload:product})
    },
    setUser:(user) => {
      dispatch({type:"ADD_USER",payload:user})
    }
  }

  return <ShopContex.Provider value={value}>
      {children}
    </ShopContex.Provider>

}

export default ShopProvider ; 