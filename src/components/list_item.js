import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { title, complete, _id } = props.listItem;





    return <li className={`list-group-item ${complete ? 'text-success' : 'text-danger' }`}><Link to={`/view-item/${_id}`} >{title}</Link></li>
}