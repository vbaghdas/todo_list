import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { title, complete, _id } = props.listItem;
    return <span className="title">
                <Link to={`/view-item/${_id}`}> 
                    <i className={`material-icons circle ${complete ? 'teal white-text' : 'grey white-text'}`}>search</i>
                </Link>
                <Link to={`/view-item/${_id}`} className={`${complete ? 'teal-text' : 'grey-text'}`}>
                    {title}
                </Link>
           </span>
}