import React, { useState } from "react";

function ContactForm() {
    //state for form values
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    //deconstruct state object so can eliminate 'formState.name' in defaultValue attribute
    //and use deconstructed properties instead
    const { name, email, message } = formState;
    //will set the values of the form to the state using the setter
    //
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value});
    }
    console.log(formState);
    //submits values in state
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    defaultValue={name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input 
                    type="email" 
                    name="email" 
                    defaultValue={email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    name="message" 
                    rows="5" 
                    defaultValue={message}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;