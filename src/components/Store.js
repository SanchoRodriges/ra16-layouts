import React, { Component } from "react"
import "./Store.css"
import IconSwitch from "./IconSwitch"
import CardsView from "./cardsview/CardsView"
import ListView from "./listview/ListView"

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'view_list'
    }

    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

  }

  productsList() {
    if ( this.state.view === 'view_list' ) {
      return <CardsView cards={this.products} />
    }

    if ( this.state.view === 'view_module' ) {
      return <ListView items={this.products} />
    }

  }

  render() {
    return (
      <div className="store">
        <IconSwitch icon={this.state.view}
          onSwitch={ result => {
            this.setState({
              view: result
            })
          }
        }/>

      {this.productsList()}

      </div>
    ) 
  }
}