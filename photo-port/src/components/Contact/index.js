import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    //state for form values
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    //state to hold error messages when validation logs an error
    const [errorMessage, setErrorMessage] = useState("");
    //deconstruct state object so can eliminate 'formState.name' in defaultValue attribute
    //and use deconstructed properties instead
    const { name, email, message } = formState;
    //will set the values of the form to the state using the setter
    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if(!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if(!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value});
        }
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
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;