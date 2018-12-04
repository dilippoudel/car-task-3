import React, { Component } from 'react';
import Input from './input';
class LogInForm extends Component {
    state = {account: 
        {username : '',
        password : ''},
        errors : {}
    }
    validate = () => {
        const errors = {};

        if(this.state.account.username.trim()=== "")
        errors.username = 'Username is required.'
        if(this.state.account.password.trim()=== "")
        errors.password = "Password is required."
        return Object.keys(errors).length === 0 ? null : errors;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors : errors || {}})
        if(errors) return ;
        //call the server
        console.log('Submitted')
    };
    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account})

    }
    render() {
        const {account} = this.state;
        return (
           <div>
               <h1>Login</h1>
               <form onSubmit = {this.handleSubmit}>
                <Input 
                onChange = {this.handleChange} 
                label = "Username" 
                value = {account.username}
                name = "username"
                error = {this.state.errors.username}
                />
                <Input 
                onChange = {this.handleChange} 
                label = "Password" 
                value = {account.password}
                name = "password"
                error = {this.state.errors.password}
                />
                   
               <button className="btn btn-primary m-2">LogIn</button>
               </form>
           </div>
        );
    }
}

export default LogInForm;