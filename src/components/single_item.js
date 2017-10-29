import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleTodo, toggleComplete, deleteSingleTodo } from '../actions';
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
            return <b className="red-text">Not Complete</b>;
        } else {
            return <Moment format="dddd, MMM Do YYYY, h:mm:ss a">{dateToFormat}</Moment>;
        }
    }

    render() {
        const { todo } = this.props;
        if(!todo){
            return  <div className="progress"><div className="indeterminate"></div></div>
        }
        const dateToFormat = new Date(parseInt(todo.created));
        
        return (
            <div className="todoList">
                <h4>Todo Item</h4>
                <Link to="/" className="btn"><i className="material-icons left">backspace</i>back</Link>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons circle teal lighten-1">{ todo.complete ? 'check' : 'clear' }</i>
                        <span className="title teal-text">{todo.title}</span>
                        <p className="details grey-text">{todo.details}</p>
                        <p className="grey-text">Created: <Moment format="dddd, MMM Do YYYY, h:mm:ss a">{dateToFormat}</Moment></p>
                        <p className="orange-text">Completed: {this.handleDate()}</p>
                    </li>
                </ul>
                <button type="button" className="btn waves-effect waves-light" onClick={() => this.handleToggle()}>
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