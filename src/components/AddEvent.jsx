import React, { useRef, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddEvent = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        photo: []
    });

    const datePicker = useRef();

    if(datePicker.current){
        M.Datepicker.init(datePicker.current)
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    const { title, description, date, photo } = formData;

    return (
        <div className='container'>
            <p className="flow-text">Add Event</p>
            <form onSubmit={onSubmit}>
                <div className="input-field">
                    <input type="text" name='title' value={title} onChange={onChange} required/>
                    <label htmlFor="title">Title</label>
                </div>
                <div className="input-field">
                    <textarea className='materialize-textarea' type="text" name='description' value={description} onChange={onChange} required/>
                    <label htmlFor="description">Description</label>
                </div>
                <div className="input-field">
                    <input ref={datePicker} type="text" className='datepicker' name='date' value={date} onChange={onChange} required/>
                    <label htmlFor="date">Date</label>
                </div>
            </form>
        </div>
    )
}

export default AddEvent
