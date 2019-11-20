import React from 'react';
import Container from './container';


const FooterSection = () => (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-800 text-white text-xl py-8">
        <Container>
            <p>&copy; Developer Student Clubs &bull; University of Idaho &bull; 2019</p>
        </Container>
    </div>
);

export default FooterSection;