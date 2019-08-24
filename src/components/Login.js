import React, {Component} from 'react'
import { connect } from 'react-redux';
import {login, signup} from '../redux/userReducer'
import {Redirect, Link} from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loggingIn: false
        }
    }

    toggleEdit = () => {
        this.setState({loggingIn: !this.state.loggingIn})
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleLogin = () => {
        this.props.login(this.state.username, this.state.password)
        
    }

   
    render () {
        let {username, password, loggingIn} = this.state
        let {user} = this.props
        if (user.loggedIn) return <Redirect to='/' />
        return (
            <div className='auth-buttons'>
                
                {loggingIn ? (
                <div>
                    <p>Login</p>
                <input className='auth-input' 
                    name='username'
                    value={username}
                    placeholder='username'
                    onChange={this.handleChange}/>
                <input 
                    className='auth-input' 
                    name='password'
                    value={password}
                    type='password' 
                    placeholder='password'
                    onChange={this.handleChange}/>
                <button onClick={() => {this.handleLogin(); this.toggleEdit()}}>Submit</button>
                <button onClick={ this.toggleEdit}>Cancel</button>
                </div>
                ) : (
                <div>
                    <Link to='/dashboard'>
                <button onClick={this.toggleEdit}><h2>Login</h2></button></Link>
                </div>
                )
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}
export default connect(mapStateToProps, {login, signup})(Login)