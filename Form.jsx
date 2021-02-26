import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            comments: '',
            choose: 'tennis'
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.textChange = this.textChange.bind(this)
        this.chooseChange = this.chooseChange.bind(this)
    }
    HandleChange(event){
        this.setState({
            username:event.target.value
        })
    }
    textChange(event){
        this.setState({
            comments:event.target.value
        })
    }
    chooseChange(event){
        this.setState({
            choose:event.target.value

        })
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.HandleChange} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments}
                        onChange={this.textChange}></textarea>
                    </div>
                    <div>
                        <label>Choose</label>
                        <select value={this.state.choose}
                        onChange={this.chooseChange}>
                            <option value='tennis'>Tennis</option>
                            <option value='basketball'>Basketball</option>
                            <option value='soccer'>Soccer</option>
                        </select>
                    </div>
                </form>
            </div>

        )
    }
}

export default Form;