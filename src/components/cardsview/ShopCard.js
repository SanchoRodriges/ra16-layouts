import React from "react"

function ShopCard({cards}) {
  return <div className="card">
    <h2>{cards.name}</h2>
    <div>{cards.color}</div>
    <img src={cards.img} />
    <div className="card-row">
      <div className="price">${cards.price}</div>
      <div className="add-to-cart">Add to cart</div>
    </div>
    
  </div>  
    
}
  
export default ShopCard;