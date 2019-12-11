import React from 'react';
import Container from './container';


const MissionSection = () => (
    <div id="#mission" className="flex flex-col items-center justify-center py-16 w-screen text-gray-600">
        <Container>
            <h1 className="text-6xl text-green-400 mb-2">
                Mission Statement
            </h1>
            <h3 className="text-green-400 font-bold text-2xl mb-3">
                Taking on tech together.
                </h3>

            <div className="flex flex-col py-6">

                <p className="text-xl">
                    To cultivate <b>tech-related gatherings</b> in the Moscow community that promote <b>personal growth</b> and positive <b>community impact</b>, so that every member who leaves a gathering does so feeling <b>empowered.</b>
                </p>
            </div>
        </Container>
    </div>
);

export default MissionSection;