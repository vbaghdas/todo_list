import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './nav';
import TodoList from "./todo_list";
import AddForm from "./add_form";
import SingleItem from './single_item';

const App = () => (
    <div className="container">
        <Nav />
        <Route exact path="/" exact component={TodoList}/>
        <Route path="/add-todo" component={AddForm}/>
        <Route path="/view-item/:id" component={SingleItem}/>
    </div>
);

export default App;
