import React, { Component } from 'react';
import SkyLight from 'react-skylight';
class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {firstname : '', lastname : '', email : '',city: '', postcode : '', streetaddress : '', phone : ''};
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {firstname, lastname, city,postcode, streetaddress, phone,email} = this.state;
        let newcustomer = {firstname : firstname, lastname : lastname, city : city, postcode: postcode, streetaddress : streetaddress, phone : phone, email : email}
        this.props.addCustomer(newcustomer);
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
          <h3>New Customer</h3>
          <form>
            <input type="text" placeholder="firstname" name="firstname"
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="lastname" name="lastname"
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="streetaddress" name="streetaddress"
              onChange={this.handleChange}/><br/>
            <input type="text" placeholder="city" name="city"
              onChange={this.handleChange}/><br/>
            <input type="email" placeholder="email" name="email"
              onChange={this.handleChange}/><br/>
              <input type="number" placeholder="phone" name="phone"
              onChange={this.handleChange}/><br/>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={this.cancelSubmit}>Cancel</button>
          </form>
        </SkyLight>
        <div>
            <button className = "btn btn-primary" style = {{'margin' : '10px'}} onClick = {() => this.refs.addDialog.show()}>New Customer</button>
        </div>
            </div>
        );
    }
}

export default AddCustomer;
