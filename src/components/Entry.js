import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteEntry, editEntry} from '../redux/entryReducer'

class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newDate: props.date,
            newTitle: props.title,
            newContent: props.content,
            newMood: props.mood,
            editing: false
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    flipEdit = () => this.setState({editing: !this.state.editing})

    save = () => {
        let {entryId, editEntry} = this.props
        let {newDate, newTitle, newContent, newMood} = this.state
        editEntry(entryId, newDate, newTitle, newContent, newMood)
    }

    delete = () => {
        let {entryId, deleteEntry} = this.props
        deleteEntry(entryId)
    }

    render() {
        let {date, title, content, mood} = this.props
        let {newDate, newTitle, newContent, newMood, editing} = this.state
        return(
            <div className='entry-container'>
                {editing ? (
                    <div>
                        <input 
                        value={newDate}
                        name='newDate'
                        onChange={this.handleChange}
                        className='input full-width'
                        />
                        <input 
                        value={newTitle}
                        name='newTitle'
                        onChange={this.handleChange}
                        className='input full-width'
                        />
                        <textarea 
                        value={newContent}
                        name='newTitle'
                        onChange={this.handleChange}
                        className='input full-width'
                        />
                        <input
                        value={newMood}
                        name='newMood'
                        onChange={this.handleChange}
                        />
                        <div>
                            <button onClick={this.save} className="button normal-btn">
                                Save
                            </button>
                            <button onClick={this.flipEdit} className='btn warning-btn'>
                                Cancel
                            </button>
                        </div>

                    </div>
                ): (
                    <div>
                        <h3>{date}</h3>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <h4>{mood}</h4>
                        <div>
                            <button onClick={this.flipEdit} className='btn normal-btn'>
                                Edit
                            </button>
                            <button onClick={this.delete} className='btn warning-btn'>
                                Delete
                            </button>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}
export default connect(null, {deleteEntry, editEntry})(Entry)