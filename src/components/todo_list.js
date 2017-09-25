import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import { getAll } from '../actions';
import ListItem from './list_item';

class TodoList extends Component {
    componentWillMount() {
        this.props.getAll();
    }

    render () {
        console.log('TodoList Props:', this.props);

        const { todos } = this.props;

        if(!todos.length){
            return <h1>Loading...</h1>
        }

        const todosList = this.props.todos.map((item, index) => {
        return <ListItem key={index} listItem={item}/>
        });

        return (
            <div>
                <h1 className="text-center">Todo List</h1>
                <ul className="list-group mt-5">
                    {todosList}
                </ul>
            </div>
        )
    }

}

function mstp(state) {
    return  {
        todos: state.todos.all
    }
}

export default connect(mstp, {getAll})(TodoList);