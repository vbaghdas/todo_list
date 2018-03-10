import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleTodo, toggleComplete, deleteSingleTodo } from '../actions';
import Header from './header';
import Moment from 'react-moment';

class SingleItem extends Component {
    
    constructor(props){
        super(props);
        this.handleDate = this.handleDate.bind(this);
    }
    componentWillMount() {
        this.props.getSingleTodo(this.props.match.params.id);
    }

    handleToggle() {
        this.props.toggleComplete(this.props.match.params.id);
    }

    handleDelete() {
        this.props.deleteSingleTodo(this.props.match.params.id).then( (push) => {
            this.props.history.push("/");
        }) 
    }

    handleDate(props){
        const { completed } = this.props.todo;
        const dateToFormat = new Date(parseInt(completed));
        if(completed === null){
            return <p className="red-text right">Not Complete</p>;
        } else {
            return <p className="orange-text right">Completed: <Moment format="dddd, MMM Do YYYY, h:mm:ss a">{dateToFormat}</Moment></p>;
        }
    }

    render() {
        const { todo } = this.props;
        if(!todo){
            return  <div className="progress"><div className="indeterminate"></div></div>
        }
        const dateToFormat = new Date(parseInt(todo.created));
        
        return (
            <div className="todo-list-container">
                <Header title="My Task" />
                <Link to="/" className="btn back-btn waves-effect waves-light"><i className="material-icons left">backspace</i>back</Link>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className={`material-icons circle lighten-1 ${todo.complete ? 'blue white-text' : 'red white-text'}`}>
                            { todo.complete ? 'check' : 'close' }
                        </i>
                        <span className="title blue-text">{todo.title}</span>
                        <p className="details grey-text text-darken-1">{todo.details}</p>
                        { this.handleDate() }
                        <p className="grey-text text-darken-1">Created: <Moment format="dddd, MMM Do YYYY, h:mm:ss a">{dateToFormat}</Moment></p>
                    </li>
                </ul>
                <button type="button" className="btn waves-effect waves-light" onClick={() => this.handleToggle()}>
                    <i className="material-icons right">{ todo.complete ? 'cancel' : 'check_circle' }</i>
                    { todo.complete ? 'Incomplete' : 'Complete' }
                </button>
                <button type="button" className="btn waves-effect waves-light" onClick={() => this.handleDelete()}>
                    <i className="material-icons right">remove_circle</i>delete
                </button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {getSingleTodo, toggleComplete, deleteSingleTodo})(SingleItem);