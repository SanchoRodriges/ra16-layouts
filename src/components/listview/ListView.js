import React from "react"
import ShopItem from "./ShopItem";
import "./ListView.css"

function ListView({items}) {
 
  return <div className="cards-list">
    { items.map(el => <ShopItem items={el} />) }
  </div>  
    
  }
  
export default ListView;