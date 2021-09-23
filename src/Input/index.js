import { useState } from 'react';

const Input = () => {

    const [values, setValues] = useState({
        email: ""
    });
    const  [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(values.email) {
            setValid(true)
        }
        setSubmitted(true);
    }

    console.log(values)
    return (
      <form className="subscribe-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success!! Thank you for Subscribing</div> : null}
        {submitted && !values.email ? <span>Please enter valid email</span> : null}
        <br />
        <input type="email" className={`form-field ${submitted && !values.email ? "input-error" : null}`} placeholder="email address" name="email" value={values.email} onChange={handleEmailInputChange} />

        <button className="form-field" type="submit">
          Subscribe
        </button>
      </form>
    );
}

export default Input;