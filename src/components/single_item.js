import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleTodo, toggleComplete, deleteSingleTodo } from '../actions';

class SingleItem extends Component {
    componentWillMount() {
        console.log('Item ID', this.props.match.params.id);
        this.props.getSingleTodo(this.props.match.params.id);
    }

    handleToggle() {
        this.props.toggleComplete(this.props.match.params.id);
    }

    handleDelete() {
        this.props.deleteSingleTodo(this.props.match.params.id);
    }

    render() {
        console.log('SingleItem props', this.props);

        const { todo } = this.props;

        if(!todo){
            return <h1 className="text-center">Loading...</h1>
        }
        return (
            <div>
                <h1>Todo Item</h1>
                <Link to="/" className="btn btn-outline-info my-3">Go Back</Link>
                <table className="table table-bordered table-inverse">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Timestamp</th>
                        <th>ID</th>
                        <th>Complete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{todo.title}</td>
                        <td>{todo.details}</td>
                        <td>{todo.created}</td>
                        <td>{todo._id}</td>
                        <td className="text-warning">{todo.complete.toString()}</td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-outline-warning mr-3" onClick={() => this.handleToggle()} >{ todo.complete ? 'Incomplete' : 'Complete' }</button>
                <button className="btn btn-outline-danger" onClick={() => this.handleDelete()}>Delete</button>
            </div>
        )
    }
}

function mstp (state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mstp, {getSingleTodo, toggleComplete, deleteSingleTodo})(SingleItem);


//add all information under title, add delete item (axios.delete)