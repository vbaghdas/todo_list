import React from 'react';
import {
    NavLink, Link 
} from 'react-router-dom';
import Clock from './clock';

export default () => (
    <nav>
        <div className="nav-wrapper teal lighten-1">
            <Clock />
            <Link to="/" className="brand-logo center"><i className="material-icons">format_list_bulleted</i>TODO LIST</Link>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/add-todo"><i className="material-icons">add_circle</i></NavLink></li>
            </ul>
        </div>
    </nav>
)