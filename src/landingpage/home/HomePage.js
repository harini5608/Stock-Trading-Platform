import React from 'react';
import Hero from './Hero.js';
import Pricing from './Pricing.js';
import Stats from './Stats.js';
import Education from './Education.js';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Education/>
        <Pricing/>
        <Stats/>

        </>
     );
}

export default HomePage;