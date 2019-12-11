import React from 'react';
import Container from './container';

import ContactForm from './contact-form';

const ContactSection = () => (
    <div id="contact" className="flex flex-col items-center justify-center py-16 w-screen bg-gray-200 text-gray-600">
        <Container>

            <div className="flex flex-col py-6 mb-6">
                <h1 className="text-3xl font-semibold text-red-400 mb-2">
                    Questions? Contact us!
                </h1>

                <p className="text-xl">
                    If you want to join our group or have questions, feel free to contact us through social media or submit a query below!
                </p>
            </div>

            <ContactForm />
        </Container>
    </div>
);

export default ContactSection;