import useShop from "../Shopcontext"


const CartProducts = () => {
    const {products,removeFromCart,total}=useShop();
  return (
    <div className="cart-Products">
       <h1>Cart Products</h1>
       {products.map((product)=>(
        <div className="cart-Product">
        <div className="cart-title-img" >
            <img src={product.urlImg} alt="" />
            <span>{product.name}</span>
        </div>
        <h5>${product.price}</h5>
      <span className="delete"  onClick={()=>removeFromCart(product)}>
        DELETE
      </span>
    </div>
))}
    <div className="cart-total-price">
        <h2>Total Price:${total}</h2>
    </div>
    </div>
  )
}

export default CartProducts