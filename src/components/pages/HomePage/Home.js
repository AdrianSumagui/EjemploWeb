import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';


function Home() {

    return (

    <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjThree}/>
        <Pricing/>
        <HeroSection {...homeObjFour}/>


    </>
    
    )
}

export default Home;