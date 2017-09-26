import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class AddForm extends Component {

    handleAddItem(vals) {
        console.log('Form vals', vals);

        this.props.addTodo(vals).then( () => {
            this.props.history.push('/');
        });
    }

    renderInput({ input, label, type, meta: {touched, error }}) {
        const hasError = touched && error;
        return (
            <div className={`form-group ${hasError ? 'has-danger' : ''}`}>
                <label className="col-form-label">{label}</label>
                <input {...input} className={`form-control ${hasError ? 'form-control-danger' : ''}`} type={type ? type: 'text'}/>
                <div className="form-control-feedback">{hasError}</div>
            </div>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <div>
                <h1 className="text-center">Add Todo Item</h1>
                <Link to="/" className="btn btn-outline-primary my-3">Go Back</Link>
                <form onSubmit={handleSubmit((vals) => this.handleAddItem(vals))}>
                    <Field name="title" component={this.renderInput} type="text" label="Title"/>
                    <Field name="details" component={this.renderInput} type="text" label="Details"/>
                    <button className="btn btn-outline-success mr-3">Add Item</button>
                    <button type="button" className="btn btn-outline-danger" onClick={reset}>Reset Form</button>
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