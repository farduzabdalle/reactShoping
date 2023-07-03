import { useReducer,useContext, createContext } from "react";
import Shopreducer, { initialState } from "./Shopreducer";



const Shopcontext=createContext(initialState);
export const ShopProvider=({children})=>{
   
const [state,dispatch]=useReducer(Shopreducer,initialState);
const addToCart=(product)=>{
    //pagecan uun update gareena
      const updatedProduct=state.products.concat(product)
      //all other pages update gareena 
      calculateTotal(updatedProduct)
      dispatch({
        type:"ADD_TO_CART",
        payload:{
            products:updatedProduct,
        }

        });

} 

const removeFromCart=(product)=>{
const updatedProduct=state.products.filter(p=>p.id !== product.id)
calculateTotal(updatedProduct)
dispatch({

    type:"REMOVE_FROM_CART",
    payload:{
        products:updatedProduct,
    }
})
}
const calculateTotal =(products)=>{
    let total=0;
    products.forEach(pro=>{
        total+=pro.price;
    });
    dispatch({
        type:"CALCULATE_TOTAL_PRICE",
        payload:total
    })
}

const values ={
    products:state.products,
    total:state.total,
    addToCart,
    removeFromCart,
}
//meel wale datada gaarsiina
return <Shopcontext.Provider value={values}>
    {children}
</Shopcontext.Provider>

}
//meesha APP ka tagi laheyd oo use context dhihi leaheeyd inta ka isticmaale
const useShop=()=>{
   const context = useContext(Shopcontext);
   if(context === undefined){
    throw new Error("CONTEXT MUST BE USED INSIDE")
   }
   return context
}
export default useShop
