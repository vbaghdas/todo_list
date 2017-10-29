import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions/index';

class Clock extends Component {
    
    componentWillMount(){
        setInterval(this.props.updateTime, 1000);
    }

    render(){
        return (
            <ul className="left hide-on-med-and-down">
                <li className="clock">{this.props.time}</li>
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.time
    }
}

export default connect(mapStateToProps, {updateTime})(Clock);