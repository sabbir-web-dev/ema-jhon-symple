
import Data from "../fakeData/index"
const data = Data;

const shopData = data

 export const initialState = {
  products:shopData,
  addProduct: []
 };


export const reducer = (state,action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const filterProduct = shopData.filter(product => product.key === action.payload);
      return{
        ...state,
        addProduct : [...state.addProduct,filterProduct[0]]
      };
  
    default:
      return state;
  }
}