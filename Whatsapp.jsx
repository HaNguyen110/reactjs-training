import React, {Component} from 'react';
// import Front from './Font'

class Whatsapp extends Component {
    constructor(){
        super()
        this.state = {
            mainData:{}
        }
    }
    componentDidMount(){
        fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(data => {
            this.setState({
                mainData:data
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.mainData.name}
            </div>
        )
    }
}

export default Whatsapp



// class Whatsapp extends Component {
//     constructor(){
//         super()
//         this.state = {
//             istyping:true 
//         }
//     }
//     componentDidMount(){
//         setTimeout(() =>{
//             this.setState({
//                 istyping:false 
//             })
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <Front is Typing = {this.state.istyping} />
//             </div>
//         );
//     }
// }

// export default Whatsapp;