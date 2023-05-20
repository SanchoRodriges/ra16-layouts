import React from "react"

function ShopItem({items}) {
  return <div className="item">
    <img src={items.img} />
    <h2>{items.name}</h2>
    <div>{items.color}</div>
    <div className="price">${items.price}</div>
    <div className="add-to-cart">Add to cart</div>
  </div>  
    
  }
  
  export default ShopItem;