import React from 'react'; 
import Features from '../components/Features';
import Hero from '../components/Hero'; 
import Listings from '../components/Listings';
import Content from '../components/Content';
import { InfoData, InfoDataTwo} from '../components/InfoData';
import { SlideData } from '../data/SlideData'




const Home = () => {
    return (
        <>
            <Hero slideData={SlideData}/>
            <Content {...InfoData}/>
            <Listings/>
            <Features/>
            <Content {...InfoDataTwo} />
        </>
    )
}

export default Home
