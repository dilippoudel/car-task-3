import React, { Component } from 'react';
import SkyLight from 'react-skylight';
class AddTrainings extends Component {
    constructor(props){
        super(props);
        this.state = {date : '', duration : '', activity : ''};
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
       const {date, duration, activity} = this.state;
        let newTraining = {date : date, duration : duration, activity : activity}
        this.props.addTraining(newTraining);
        this.refs.addDialog.hide();
    }

    cancelSubmit = (event) => {
        event.preventDefault(); 
        this.refs.addDialog.hide(); 
      }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="addDialog">
          <h3>Add Training</h3>
          <form>
            <input type="date" placeholder="date" name="date" 
              onChange={this.handleChange}/><br/> 
            <input type="number" placeholder="duration" name="duration" 
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="activity" name="activity" 
              onChange={this.handleChange}/><br/>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={this.cancelSubmit}>Cancel</button>     
          </form> 
        </SkyLight>
        <div>
            <button className = "btn btn-primary" style = {{'margin' : '10px'}} onClick = {() => this.refs.addDialog.show()}>Add Training</button>
        </div>
            </div>
        );
    }
}

export default AddTrainings;