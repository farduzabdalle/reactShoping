import Product from "./Product";
const products=[
    {
        id:1,
        name:'boot',
        urlImg:"https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        ,price:12
    },{
        id:2,
        name:'sneakers',
        urlImg:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,
        price:15
    }
    ,{
        id:3,
        name:"heels",
        urlImg:"https://images.unsplash.com/photo-1590099033615-be195f8d575c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        price:15

    }
    ,{
      id:4,
      name:"heels",
      urlImg:"https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price:15

  }
  ,{
    id:5,
    name:"sneakers",
    urlImg:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price:15

}
,{
  id:6,
  name:"boot",
  urlImg:"https://images.unsplash.com/photo-1554133818-7bb790d55236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  price:15

}
]
const Products = () => {
  return ( <div  className="Grid">
     {products.map(product =>(

  <Product key={product.id} product={product}/>
    ))}
    </div>
  )
}

export default Products