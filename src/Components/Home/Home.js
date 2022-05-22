import React from 'react';
import WaterWave from 'react-water-wave';
import NavigationBar from '../NavBar/NavigationBar';
import solerImg from './../imgesOf/soler.jpg';
import TypeWriter from './TypeWriter';


const Home = () => {
    return (
    <WaterWave imageUrl={solerImg} dropRadius={25} >
        {methods => ( <div className='h-screen text-white' >
            <NavigationBar />
            <div className=' flex flex-row' >
                <div className=' w-2/4 py-52 px-14 text-left text-2xl ' >
                    <p className='font-space'>Hi !! There</p>
                    <TypeWriter />
                </div>
                <div className='border w-2/4' >
                    <p>this will be my image</p>
                </div>
            </div>
        </div> )}
    </WaterWave>
    );
};

export default Home;