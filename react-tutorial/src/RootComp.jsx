import React, { Component } from 'react';
// import About from './About';
// import Banner from './Banner';
// import Footer from './Footer';
// import Header from './Header';
import './index.css';
//import Item from './Item';




//--------------------STATE----------------------------------------------------

class RootComp  extends Component {
    constructor(){
        super()
        this.state = {
            isConnected:false
        }
    }
    render() { 
        let connectionStart;
        if(this.state.isConnected) {
            connectionStart='you are connected to our service'
        } else {
            connectionStart='you are disconnected form our service'
        }
        return ( 
            <div>
                <p>{connectionStart}</p>
            </div>
        );
    }
}
 

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

export default RootComp