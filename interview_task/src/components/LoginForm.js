import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            password: '',
            error:{}
        }
    }

    onChange = (e)=>{
        this.setState({[e.name] : e.value});

    }
    validate(){
        let error= {}, isValid=true;;
        if(this.state.loginName.trim() ===''){
            error.loginNameRequired= 'User name is required';
            isValid= false;
        }

        if(this.state.password.trim() ===''){
            error.passwordRequired= 'Password is required';
            isValid= false;
        }
        this.setState({error: error});
        return isValid;
    }

    onSubmit =() =>{
        let isValidated = this.validate();
        if(isValidated){
            this.props.login(this.state.loginName.toLowerCase().trim(), this.state.password);
        }
    }
    render() {
        return (
            <div id="loginDetails">
                <span>Please enter the credentails to login</span>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        id='userid'
                        type='text'
                        className='fieldDetails'
                        label='User Name'
                        value={this.state.loginName}
                        onChange={e => this.onChange({name:'loginName', value:e})}
                    />
                    <p name="errormessage" className="errormessage">
                        {this.state.error.loginNameRequired}
                    </p>

                    <TextField
                        id='password'
                        //type='password'
                        className='fieldDetails'
                        label='Password'
                        value={this.state.password}
                        onChange={e => this.onChange({name:'password',value:e})}
                    />
                    <p name="errormessage" className="errormessage">
                        {this.state.error.passwordRequired}
                    </p>
                    <Button
                        id="btnSubmit"
                        type="submit"
                        children="Login"
                        className="btn-green"
                        raised
                        secondary
                    />
                </form>
            </div>
        )
    }
}
export default LoginForm;
