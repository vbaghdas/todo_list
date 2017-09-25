import React from 'react';

export default (props) => {
    const { title, complete } = props.listItem;





    return <li className={`list-group-item ${complete ? 'text-success' : 'danger' }`}>{title}</li>
}