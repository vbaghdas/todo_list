import React from "react";
import { Link } from "react-router-dom";
import Clock from './clock';

const Header = (props) => {
    
    function renderNavButton() {
        if (props.back) {
            return (
                <Link to="/">
                    <i className="material-icons">
                        do_not_disturb_on
                    </i>
                </Link>
            )
        } else {
            return (
                <Link to="/add-todo">
                    <i className="material-icons">
                        add_circle
                    </i>
                </Link>
            )
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Clock />
                <span className="brand-logo center">{props.title}</span>
                <ul className="right">
                    <li className={props.back ? "hide-on-small-only" : ""}>
                        { renderNavButton() }
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;