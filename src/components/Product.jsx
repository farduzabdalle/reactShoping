import { useEffect, useState } from "react";
import useShop from "../Shopcontext"

const Product = ({product}) => {
  const {addToCart,removeFromCart,products}=useShop();
const [isInCart,setisInCart]=useState(false)
useEffect(()=>{
  //product cart kujuro radiya
const isCart=products.filter((pro)=>pro.id==product.id)
if(isCart.length>0){
  setisInCart(true)
}

else{
  setisInCart(false)
}
},[products])
  const handleAddtoCart=()=>{
    if(isInCart){
      removeFromCart(product)
    }
    else{
      addToCart(product)
    }
   
    
  }
  return (
    <div className="card" 
     style={{minHeight:'100%' ,
     backgroundRepeat:'no-repeat',
     backgroundSize:'cover',
     background:`linear-gradient(rgba(0,0,0,0.1),
     rgba(0,0,0,0.1 )),
      url(${product.urlImg})`}}>  
    <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
    </div>
    <button className={`btn ${isInCart ? "btn-secondary": "btn-primary"}`} 
    onClick={handleAddtoCart}>{isInCart?'-':'+'}</button>
    </div>
  )
}

export default Product