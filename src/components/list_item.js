import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    
    const { title, complete, _id } = props.listItem;
    return <div className="title">
                <Link to={`/view-item/${_id}`}> 
                    <i className={`material-icons circle ${complete ? 'blue white-text' : 'grey darken-4 red-text'}`}>search</i>
                    <i className={`material-icons right ${complete ? 'blue-text' : 'red-text'}`}>
                        {complete ? 'check' : 'close'}
                    </i>
                </Link>
                <Link to={`/view-item/${_id}`} className={`${complete ? 'blue-text' : 'grey-text text-darken-1'}`}>
                    {title}
                </Link>
           </div>
}