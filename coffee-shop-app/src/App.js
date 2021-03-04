
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <Sidebar 
        title ={this.props.sidebarTitle} 
        now   ={this.props.rightnow} 
        menu  ={this.props.menu}/>
      <Main menu={this.props.menu} />
      <Footer />
    </div>
  );
  }
}

App.defaultProps = {
  sidebarTitle: 'Daily Menu',
  rightnow: new Date().toString()
    .split(" ")
    .slice(0, 5)
    .join(" "),
    menu:{
      Coffee: [
        {name: 'Espresso',          price: 3.99 },
        {name: 'Cafe Latte',        price: 3.50 },
        {name: 'Drip Coffee',       price: 1.99 },
        {name: 'Iced Coffee',       price: 2.99 },
        {name: 'Cold Brew Coffee',  price: 4.99 },
        {name: 'Caffee Americano',  price: 2.99 },
        {name: 'Cappucino',         price: 3.50 },
        {name: 'Cafe Mocha',        price: 4.50 }
      ],
  
      bakery: [
        {name: 'Split Pea Soup',        price: 2.99 },
        {name: 'Pumpkin Muffin',        price: 2.50 },
        {name: 'Cinnamon Raisin Bagel', price: 2.99 }
      ],
  
      specials: {
        Mon: 'Split Pea Soup',
        Tue: 'Tacos',
        Web: 'Paella',
        Thu: 'Teriyaki Chicken',
        Fri: 'Salmon Salad',
        Sat: 'Mini-pizzas',
        Sun: 'Pancakes, Egg, and Bacon'
      }
    }
}



function Navbar(){
  return(
    <div className='App--navbar'>
      <h1>Coffee Shop</h1>
    </div>
  )
}

//main component should display the current orders
//and also give user the ability to select items on the menu 
class Main extends Component {
  state = {
    orders: [
      // {
      //   customer: 'Me',
      //   item: [
      //     {name: 'Espresso', price: 3.99, amt: 2},
      //     {name: 'Bluberry', price: 2.99, amt: 1}
      //   ]
      // }
    ],
    inputValue: '',
    menuValue: 'none'
  }

renderOrder = (order, idx) => <OrderItem order={order} key={idx} />

onMenuSelected = (Event) => this.setState({ menuValue: Event.target.value})

handleInputChange = (Event) => this.setState({ inputValue: Event.target.value})

renderMenuSelect = () => {
  const keys = Object.keys(this.props.menu)
  return (
    <select value={this.state.menuValue} onChange={this.onMenuSelected}>
      <option>Select Menu</option>
      {
        keys.map((category, idx) => {
          return(
            <option value = {category} key={idx}>{category}</option>
          )
        })
      }
    </select>
  )
}

  // handleInputChange = (event) => {
  //  // console.log(event.target.value);
  //  const {value} = event.target
  //   this.setState((prevState) => {
  //     return {
  //       orders: prevState.orders,
  //       inputValue: value
  //     }
  //   })
  // }



  render(){
    return(
      <div className='App--main'>
        <div>
          <h2>orders</h2>
        </div>
        <hr />
        <ul>
          {
            this.state.orders.length > 0 ?
            this.state.orders.map((order, idx) => this.renderOrder(order, idx) )
            :
            <li key={-1}>No orders yet!</li>
          }
        </ul>
        <div className="select-menu-item">
          <hr />
          <p>
            Enter item here: &nbsp;
            {this.renderMenuSelect()}
            {
            /* 
            <input 
            name="selected-item-input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            /> 
            */
            }
            <button>Order</button>
          </p>
        </div>
      </div>
    )
  }
}


function OrderItem(props) {
  const{customer, items} = props.order
  //const customer = props.order.customer
  //const customer = prop.order.items
  return(
    <li className="order-item">
      <strong>{customer}</strong>
      <ul>
        {
          items.map((order, i) => {
            return(
              <li className="menu-item" key={i}>
                <span>{order.amt} - </span> {order.name}
              </li>
            )
          })
        }
      </ul>
      <br /> <br /> <br />
    </li>
  )
}


function Sidebar(props){
  return(
    <div className='App--sidebar'>
      <h2>{props.title}</h2>
      <p>Last updated: {props.now}</p>
      <hr />
        <em>Coffee</em>
        <ul>
          {
            props.menu.Coffee.map( (item, idx) => {
              return(
                <li className="menu-item" key={idx}>
                  {item.name} <span>${item.price.toFixed(2)}</span>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

function Footer(){
  return(
    <div className='App--footer'>
      <h5>&copy; 2021 Coffee Shop Inc.</h5>
    </div>
  )
}
export default App;
