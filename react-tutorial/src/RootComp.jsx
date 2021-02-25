import React, { Component } from 'react';
//---------COMPONENT-----------
//  import About from './About';
//  import Banner from './Banner';
//  import Footer from './Footer';
//  import Header from './Header';

//----------ITEMS-----------
//import Item from './Item';

//----------QUIZ QUESTION------------
//import Questions from './Questions';
//import Quiz from './Quiz'
//import './index.css';

class RootComp extends Component {
    constructor() {
        super()
        this.state ={
            number:0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState(PrevState=> {
            return{
                number:PrevState.number + 1
            }
        })
    }

    render() { 
        return (  
            <div>
                <h3>{this.state.number}</h3>
                <button onClick={this.clickHandler}>Punch To Increase</button>
            </div>
        );
    }
}
 
export default RootComp;

//----------QUIZ QUESTION------------
// class RootComp extends Component {
//     constructor(){
//         super()
//         this.state = {
//             problem:Questions
//         }
//     }
//     render() { 
//         const newProblem = this.state.problem.map(item => <Quiz 
//         key = {item.id}
//         firstq = {item.firstq}
//         firsta = {item.firsta}
//         firstop = {item.firstop}
//         seconda = {item.seconda}
//         secondop = {item.secondop}
//         thirda = {item.thirda}
//         thirdop = {item.thirsop}
//         />)
//         return (  
//             <div>
//                 {newProblem}
//             </div>
//         );
//     }
// }
 

//--------------------STATE-----------------------

// class RootComp  extends Component {
//     constructor(){
//         super()
//         this.state = {
//             isConnected:false
//         }
//     }
//     render() { 
//         let connectionStart;
//         if(this.state.isConnected) {
//             connectionStart='you are connected to our service'
//         } else {
//             connectionStart='you are disconnected form our service'
//         }
//         return ( 
//             <div>
//                 <p>{connectionStart}</p>
//             </div>
//         );
//     }
// }
 

//-----------------ITEMS---------------------------
// function RootComp () {
//     return (
//         <div>
//             <Header />
//             <Banner />
//             <About />
//             <Footer />
//             <div>
//                 <Item 
//                 image = 'https://cdn.shopify.com/s/files/1/0353/1253/products/RoyalPoster_4ac22d47-9d13-4a12-9869-3d556204230c_2048x.jpg?v=1597175719'
//                 name = 'Curry Poster'
//                 price = '100$'
//                 description = 'best seller'
//                 />

//                 <Item 
//                 image = 'https://cdn.shopify.com/s/files/1/0353/1253/products/RoyalPoster_4ac22d47-9d13-4a12-9869-3d556204230c_2048x.jpg?v=1597175719'
//                 name = 'Curry Poster'
//                 price = '100$'
//                 description = 'best seller'
//                 />

//                 <Item 
//                 image = 'https://cdn.shopify.com/s/files/1/0353/1253/products/RoyalPoster_4ac22d47-9d13-4a12-9869-3d556204230c_2048x.jpg?v=1597175719'
//                 name = 'Curry Poster'
//                 price = '100$'
//                 description = 'best seller'
//                 />

//                 <Item 
//                 image = 'https://cdn.shopify.com/s/files/1/0353/1253/products/RoyalPoster_4ac22d47-9d13-4a12-9869-3d556204230c_2048x.jpg?v=1597175719'
//                 name = 'Curry Poster'
//                 price = '100$'
//                 description = 'best seller'
//                 />
//             </div>
//         </div>
        
//     )
// }
