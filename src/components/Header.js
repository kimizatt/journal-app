import React, {Component} from 'react'
import Auth from './Auth'

class Header extends Component {

    render () {
        return (
            <div className='header'>
                <h1>Journal</h1>
                <Auth />
            </div>
        )
    }
}
export default Header