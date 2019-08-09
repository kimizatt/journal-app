import React, {Component} from 'react'

class Auth extends Component {

    render () {
        return (
            <div className='auth-buttons'>
                <button><h2>Login</h2></button>
                <input className='auth-input' placeholder='username'/>
                <input className='auth-input' placeholder='password'/>
                <button><h2>Signup</h2></button>
                <button><h2>Logout</h2></button>
            
            </div>
        )
    }
}
export default Auth