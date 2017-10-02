import React, { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from '../actions';
import ListItem from './list_item';

class TodoList extends Component {
    componentWillMount() {
        this.props.getAll();
    }

    render () {
        const { todos } = this.props;

        if(!todos.length){
            return <h1>Loading...</h1>
        }

        const todosList = this.props.todos.map((item, index) => {
        return <tr><ListItem key={index} listItem={item}/></tr>
        });

        return (
            <div>
                <h1 className="text-center">Todo List</h1>
                <div className="justify-content-center d-flex my-3">
                    <Link to="/add-todo" className="btn btn-outline-info my-3">Add Task</Link>
                </div>
                <table className="table table-inverse">
                    <tr>
                        <th className="text-center"><h3>Task Items</h3></th>
                    </tr>
                    <tbody>
                        {todosList}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return  {
        todos: state.todos.all
    }
}

export default connect(mapStateToProps, {getAll})(TodoList);