import React, {Component} from 'react'
import { connect } from 'react-redux';
import { signup} from '../redux/userReducer'
import {Redirect} from 'react-router-dom'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            signingUp: false,
        }
    }
    toggleEdit = () => {
        this.setState({signingUp: !this.state.signingUp})
    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSignup = () => {
        this.props.signup(this.state.username, this.state.password)
    }


    render () {
        let {username, password, signingUp} = this.state
        let {user} = this.props
        if (user.loggedIn) return <Redirect to='/' />
        return (
            <div className='auth-buttons'>
               
                {signingUp ? (
                <div>
                
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
                    <button onClick={()=> {this.handleSignup(); this.toggleEdit()}}>Submit</button>
                    <button onClick={ this.toggleEdit}>Cancel</button>
                </div>
                ) : (
                <div>
                <button onClick={this.toggleEdit}><h2>Signup</h2></button>
                
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
export default connect(mapStateToProps, {signup})(Signup)