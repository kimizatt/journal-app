import React, {Component} from 'react'
import Login from './Login'
import Signup from './Signup'
import Logout from './Logout'


class Header extends Component {

    render () {
        return (
            <div className='header'>
                <h1>Journal</h1>
                <div className='auth-container'></div>
                <Login />
                <Signup />
                <Logout />
            
            </div>
        )
    }
}
export default Header