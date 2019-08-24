import React, {Component} from 'react'
import { connect } from 'react-redux';
import {logout} from '../redux/userReducer'


function Logout (props) {
    
    
    
    return (
        <div className='logout-button'>
            {props.user.loggedIn ? (
                 <button onClick={props.logout}><h2>Logout</h2></button>
            ) : (
                null
            )
        }
           
        </div>
    )
}
function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, {logout})(Logout)