import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { title, complete, _id } = props.listItem;
    return <div className="title">
                <Link to={`/view-item/${_id}`}> 
                    <i className={`material-icons circle ${complete ? 'teal white-text' : 'grey darken-3 red-text'}`}>search</i>
                    <i className={`material-icons right ${complete ? 'teal-text' : 'red-text'}`}>
                        {complete ? 'check' : 'close'}
                    </i>
                </Link>
                <Link to={`/view-item/${_id}`} className={`${complete ? 'teal-text' : 'grey-text'}`}>
                    {title}
                </Link>
           </div>
}