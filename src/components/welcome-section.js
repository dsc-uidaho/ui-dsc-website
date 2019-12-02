import React from 'react';
import Container from './container';
import StudyJamBackgroundImage from './study-jam-background-image';

const WelcomeSection = () => (
    <div id="#about" className="flex flex-col h-screen w-screen text-gray-600 border-b-2">
        <Container>
            <h1 className="text-6xl text-orange-400 mb-2">Welcome!
            </h1>

            <div className="flex flex-col py-2">
                <h3 className="font-semibold text-2xl mb-2">
                    What is a Developer Student Club? (DSC)
                </h3>
                <p className="text-xl">
                    A Developer Student Club is a community group for students who want to learn new tech skills, create a local solution and meet new people.
                </p>
            </div>

            <div className="flex flex-col py-2">
                <h3 className="font-semibold text-2xl mb-2">
                    To do this we:
                </h3>
                <ul className="text-xl list-reset">
                    <li>Host workshops & events</li>
                    <li>Host speakers</li>
                    <li>Participate in the DSC Solution Challenge</li>

                </ul>
            </div>

            <div className="flex py-2">
                <p className="text-xl">
                    <span className="font-semibold text-2xl mr-2">The DSC Solution Challenge</span>
                    is a long term group project wherein we use technology to solve a community problem. We will concentrate on the Solution Challenge in Spring 2020.
                </p>
            </div>
        </Container>
        <StudyJamBackgroundImage className="block bg-cover bg-center h-screen w-screen shadow" />
    </div>
);

export default WelcomeSection;