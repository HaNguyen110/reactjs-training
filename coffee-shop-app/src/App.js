
import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    const sidebarTitle = 'Daily Menu'
    const rightnow = new Date().toString()
    .split(" ")
    .slice(0, 5)
    .join(" ")

    const menu = {
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

  return (
    <div className="App">
      <Navbar />
      <Sidebar 
        title={sidebarTitle} 
        now={rightnow} 
        menu={menu}/>
      <Main />
      <Footer />
    </div>
  );
  }
}


//function App() {
  // const sidebarTitle = 'Daily Menu'
  // const rightnow = new Date().toString()
  // .split(" ")
  // .slice(0, 5)
  // .join(" ")

  // const menu = {
  //   Coffee: [
  //     {name: 'Espresso',          price: 3.99 },
  //     {name: 'Cafe Latte',        price: 3.50 },
  //     {name: 'Drip Coffee',       price: 1.99 },
  //     {name: 'Iced Coffee',       price: 2.99 },
  //     {name: 'Cold Brew Coffee',  price: 4.99 },
  //     {name: 'Caffee Americano',  price: 2.99 },
  //     {name: 'Cappucino',         price: 3.50 },
  //     {name: 'Cafe Mocha',        price: 4.50 }
  //   ],

  //   bakery: [
  //     {name: 'Split Pea Soup',        price: 2.99 },
  //     {name: 'Pumpkin Muffin',        price: 2.50 },
  //     {name: 'Cinnamon Raisin Bagel', price: 2.99 }
  //   ],

  //   specials: {
  //     Mon: 'Split Pea Soup',
  //     Tue: 'Tacos',
  //     Web: 'Paella',
  //     Thu: 'Teriyaki Chicken',
  //     Fri: 'Salmon Salad',
  //     Sat: 'Mini-pizzas',
  //     Sun: 'Pancakes, Egg, and Bacon'
  //   }
  // }

  // return (
  //   <div className="App">
  //     <Navbar />
  //     <Sidebar 
  //       title={sidebarTitle} 
  //       now={rightnow} 
  //       menu={menu}/>
  //     <Main />
  //     <Footer />
  //   </div>
  // );
//}

function Navbar(){
  return(
    <div className='App--navbar'>
      <h1>Coffee Shop</h1>
    </div>
  )
}

function Main(){
  return(
    <div className='App--main'>
      <h2>main</h2>
    </div>
  )
}

function Sidebar(props){
  return(
    <div className='App--sidebar'>
      <h2>{props.title}</h2>
      <p>Last updated: {props.now}</p>
      <hr />
      <p>
        <em>Coffee</em>
      </p>
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
