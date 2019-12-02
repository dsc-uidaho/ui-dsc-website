import React from 'react';
import Container from './container';


const JoinSection = () => (
    <div className="flex flex-col items-center justify-center w-screen bg-red-600 text-white py-16">
        <Container>
            <h1 className="text-6xl mb-2">
                How can I Join?
            </h1>

            <div className="flex flex-col">
                <p className="text-xl">
                    We meet on for workshops on <b>Monday evenings at 5:00pm</b> in <b>Room 120</b> of the <b>University of Idaho Library.</b> To officially join the club, just talk to a core team member after a meeting!
                </p>
            </div>
        </Container>
    </div>
);

export default JoinSection;