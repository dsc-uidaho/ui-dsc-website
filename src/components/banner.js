import React from 'react';
import BannerBackgroundImage from './banner-background-image';

const Banner = () => {

    return (
        <div id="#home" className="flex flex-col min-h-0 h-screen w-screen">
            <BannerBackgroundImage className="block bg-cover bg-center h-screen w-screen shadow">

                <div className="z-20 flex flex-col items-center justify-center pb-16 text-gray-700 w-full h-full">

                    <h1 className="text-6xl mb-6">Developer Student Clubs</h1>
                    <h2 className="text-4xl mb-16 text-gray-600">University of Idaho</h2>
                    <button className="font-semibold text-xl text-white rounded-full shadow bg-red-400 px-8 py-4 uppercase">Learn More</button>
                </div>
            </BannerBackgroundImage>
        </div>

    )
};


export default Banner;