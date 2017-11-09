import React, { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from '../actions';
import Header from "./header";
import ListItem from './list_item';

class TodoList extends Component {
    
    componentWillMount() {
        this.props.getAll();
    }

    render () {
        const { todos } = this.props;

        if(!todos.length){
            return <div className="progress"><div className="indeterminate"></div></div>
        }

        const todosList = this.props.todos.map((item, index) => {
            return <li key={index} className="collection-item avatar"><ListItem key={index} listItem={item}/></li>
        });

        return (
            <div className="todo-list-container">
                    <Header title="TODO List"/>
                    <ul className="collection">
                        { todosList }
                    </ul>
                <div className="">
                    <Link to="/add-todo">
                        <button className="btn waves-effect waves-light">
                        <i className="material-icons right">add_circle</i>add task</button>
                    </Link>
                </div>
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