import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../redux/userReducer'
import Entries from '../Entries'

class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props)
        if(!this.props.user.loggedIn){
            this.props.getUser()
        }
    }

    render() {
        // let { error, redirect} = this.props.user
        // if (error || redirect) return <Redirect to='/login' />
        
        return (
            <div className='display-container'>
             
                <div className='top-container'>
                <div className='ball-container' ></div>
                <div className='ball-container1' ></div>
                <div className='ball-container2' ></div>
                </div>
                <div>
                    <div className='red-box'><p>Position relative:moved away from the left edge of the window 100px and top -50px  (Relative to the orange container)</p></div>
                    <div className='blue-box'>
                        Absolute at top 400px and right 300px. Different from fixed since it is stuck to this position on the page not to the 'screen' (like the ball above)
                    </div>
                    <div className='green-box'>
                        Absolute right 50px and bottom 100px;
                    </div>
                    <div className='black-box'></div>
                <script>document.getElementbyId('demo').</script>
                </div>
                {/* <Entries 
                /> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }  
}

export default connect(mapStateToProps, {getUser})(Dashboard)
