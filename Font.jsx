import React, {Component} from 'react';

class Front extends Component {
    render(){
        if(this.props.isTyping){
            return(
                <p>Your friend is typing</p>
            )
        }else {
            return(
                <h4>The Earth can be repaired, on plastic at a time</h4>
            )
        }
    }
}

export default Front;