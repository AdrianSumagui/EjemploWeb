import React from 'react';
import { homeObjOne } from './Data';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';


function Home() {

    return (

    <>
        <Pricing/>
        <HeroSection {...homeObjOne}/>
    </>
    
    )
}

export default Home;