
import Data from "../fakeData/index"
const data = Data;

const shopData = data

 export const initialState = {
  products: shopData,
  addProduct: []
 };


export const reducer = (state,action) => {
  switch (action.payload) {
    case "ADD_PRODUCT":
      return{
        ...state,
        addProduct : [...state.addProduct,action.payload]
      };
  
    default:
      return state;
  }
}