import React from 'react';


const ContactForm = () => (
    <form className="flex flex-col bg-white  shadow rounded" name="contact" method="POST" data-netlify="true">
        <p>
            <label>
                Name
                <input type="text" name="name" />
            </label>
        </p>
        <p>
            <label>
                Email Address
                <input type="email" name="email" />
            </label>
        </p>
        <p>
            <label>
                Subject
                <input type="text" name="subject" />
            </label>
        </p>
        <p>
            <label>
                Message
                <textarea name="message"></textarea>
            </label>
        </p>
        <p>
            <button type="submit">Submit</button>
        </p>
    </form>
);

export default ContactForm;