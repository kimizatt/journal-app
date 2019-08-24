import React, {Component} from 'react'
import {getEntries, saveEntry} from '../redux/entryReducer'
//import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'
import Entry from './Entry'
import {Redirect} from 'react-router-dom'

class Entries extends Component {
    constructor() {
        super ()
        this.state = {
            entries: [],
            date: '',
            title: '',
            content: '',
            mood: '',
        }
    }

    componentDidMount() {
        console.log(this.props, 'this.props')
        this.props.getEntries()
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    addEntry = () => {
        let {date, title, content, mood} = this.state
        this.setState({date: '', title: '', content: '', mood: ''})
        this.props.saveEntry(date, title, content, mood)
    }


    render() {
        if(!this.props.user.user.loggedIn)
        return <Redirect to='/login' />
        let {date, title, content, mood, } = this.state
        let {entries} = this.props
        console.log(this.props, 'props on Entries page')
        
        return (
            <div>
                {entries.filter(entries => entries.user_id===this.props.user.user.id)
                    .map( entry => (
                    <Entry key={entry.id} {...entries} />
                  ))}
                <div>
                Date: 
                <input 
                type="text"
                value={date}
                name='date'
                onChange={this.handleChange}
                />
                Title: 
                <input 
                type='text'
                value={title}
                name='title'
                onChange={this.handleChange}
                />
                Content:
                <textarea 
                type='text'
                value={content}
                name='content'
                onChange={this.handleChange}
                />
                <input 
                type='text'
                value={mood}
                name='mood'
                onChange={this.handleChange}
                />
                <button onClick={this.addEntry}>Submit</button>
                </div>
            </div>
            
        )
    }
}

function mapStatetoProps(state) {
    console.log('hit mapState', state.entries)
    return  {
        user: state.user,
        entries: state.entries,

}
}

export default connect(mapStatetoProps, {getEntries, saveEntry})(Entries)