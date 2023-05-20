import React from "react"
import ShopCard from "./ShopCard";
import "./CardsView.css"

function CardsView({cards}) {
 
  return <div className="cards-view">
    { cards.map(el => <ShopCard cards={el} />) }
  </div>  
    
  }
  
export default CardsView;