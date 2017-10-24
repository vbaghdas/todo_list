import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { title, complete, _id } = props.listItem;
    return <th scope="row" className="text-center">
                <Link to={`/view-item/${_id}`} className={`text-${complete ? 'warning' : 'danger'}`}>{title}</Link>
           </th>
}