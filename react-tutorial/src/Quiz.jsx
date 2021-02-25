import React, {Component} from 'react';

class Quiz extends Component {
    render() { 
        return (  
            <div>
                <h5>{this.props.firstq}</h5>
                <p>{this.props.firsta}</p>
                <input type='checkbox' onchecked = {this.props.firstop}/>
                <p>{this.props.seconda}</p>
                <input type='checkbox'onchecked = {this.props.seconop}/>
                <p>{this.props.thirda}</p>
                <input type='checkbox'onchecked = {this.props.thirdop}/>
            </div>
        );
    }
}
export default Quiz ;