export const initialState={
    products:[],
    total:0,
}
const Shopreducer = (state,action) => {
 const{type,payload}=action;
 
 switch(type){
    case "ADD_TO_CART":
        return{
            ...state,
            products: payload.products,
        
        };
        case "REMOVE_FROM_CART":
            return{
                ...state,
                products: payload.products,
                 
            };
            case "CALCULATE_TOTAL_PRICE":
                return{
                    ...state,
                    total: payload,
                }
            
        default:
            throw new Error ("unknowReducer");

 }  
};
export default Shopreducer;
