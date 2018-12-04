import React, { Component } from 'react';
import SkyLight from 'react-skylight';
class InsertTraining extends Component {
    constructor(props){
        super(props);
        this.state = {date : '', duration : '', activity : '', customer:[]};
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fetchTraining = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then((response) => response.json()) 
        .then((responseData) => { 
          this.setState({ 
            trainers: responseData.content,
          }); 
        })
        .catch(err => console.error(err)); 
    
    }

    addTraining(training) {
        fetch( 'https://customerrest.herokuapp.com/gettrainings', 
          { method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(training)
          })
        .then(res => this.fetchTraining())
        .catch(err => console.error(err))
      } 
    handleSubmit = (event) => {
        event.preventDefault();
        const {date, duration, activity,customer} = this.state;
        let newTraining = {date : date, duration : duration, activity : activity, customer:customer}
        this.addTraining(newTraining);
        this.refs.addDialog.hide();
    }

    cancelSubmit = (event) => {
        event.preventDefault(); 
        this.refs.addDialog.hide(); 
      }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="addDialog">
          <h3>New Training</h3>
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

export default InsertTraining;