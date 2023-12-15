import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducer";


export const ShopContex = createContext({});

const ShopProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer,initialState);

  const value = {
    products : state.products,
    addProduct : (newProduct) => {
      dispatch({type:"ADD_PRODUCT",payload:newProduct})
    }
  }

  return <ShopContex.Provider value={value}>
      {children}
    </ShopContex.Provider>

}

export default ShopProvider ; 