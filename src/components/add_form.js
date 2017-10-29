import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class AddForm extends Component {

    handleAddItem(vals) {
        this.props.addTodo(vals).then( () => {
            this.props.history.push('/');
        });
    }

    renderInput({ input, label, type, meta: {touched, error }}) {
        const hasError = touched && error;
        return (
            <div className={`formGroup ${hasError ? 'formError' : ''}`}>
                <label className="formLabel">{label}</label>
                <input {...input} className={`formControl ${hasError ? 'formControlError' : ''}`} type={type ? type: 'text'}/>
                <div className="formFeedback">{hasError}</div>
            </div>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <div className="todoList">
                <h4>Add Task</h4>
                <Link to="/" className="btn"><i className="material-icons left">backspace</i>back</Link>
                <form onSubmit={handleSubmit((vals) => this.handleAddItem(vals))}>
                    <div className="input-field col s6">
                        <Field name="title" component={this.renderInput} type="text" label="Title"/>
                    </div>
                    <div className="input-field col s6">
                        <Field name="details" component={this.renderInput} type="text" label="Details"/>
                    </div>
                    <button type="submit" className="btn waves-effect waves-light">
                        <i className="material-icons right">add_circle</i>add task
                    </button>
                    <button type="button" className="btn waves-effect waves-light" onClick={reset}>
                        <i className="material-icons right">refresh</i>reset
                    </button>
                </form>
            </div>
            )
    }
}

function validate(vals) {
    const errors = {};

    if(!vals.title){
        errors.title = 'Please enter a title';
    }

    if(!vals.details){
        errors.details = 'Please enter details about your todo item';
    }
    return errors;
}

AddForm = reduxForm({
    form: 'add-item',
    validate: validate
})(AddForm);

export default connect(null, {addTodo})(AddForm) ;