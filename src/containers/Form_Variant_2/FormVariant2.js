import { React, useRef } from 'react';

const FormVariant2 = (props) => {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitFormHandler(e) {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;

        // Here is where you put logic for serverside code on API. Using Fetch or something.
    }

    return (
        <>
            <h1>The Home Page Sign up Form</h1>
            <form>
                <div>
                    <label htmlFor='email'>Your Email Address</label>
                    <input type='email' id='email' ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor='feedback'>Your Feedback</label>
                    <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
                </div>
                <button>Send Feedback</button>
            </form>
        </>
    );
};

export default FormVariant2;

// This is a form skeleton from scratch JSX. Can be hooked up to an API backend, note use of Refs and structure