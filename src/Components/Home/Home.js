import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import WaterWave from 'react-water-wave';
import NavigationBar from '../NavBar/NavigationBar';
import solerImg from './../imgesOf/soler.jpg';
import TypeWriter from './TypeWriter';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { faReact, faNodeJs, faJs, faHtml5, faBootstrap, faCss3 } from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const react = <FontAwesomeIcon icon={faReact} />
    const nodeJs = <FontAwesomeIcon icon={faNodeJs} />
    const js = <FontAwesomeIcon icon={faJs} />
    const html = <FontAwesomeIcon icon={faHtml5} />
    const bootstrap = <FontAwesomeIcon icon={faBootstrap} />
    const css3 = <FontAwesomeIcon icon={faCss3} />


    return (
    <WaterWave imageUrl={solerImg} dropRadius={25} >
        {methods => ( <div className='h-screen text-white' >
            <NavigationBar />
            <div className=' flex flex-row  h-screen' >
                <div className=' flex justify-center items-center w-2/4 h-5/6 text-left text-2xl border ' >
                    <div className='' >
                        <p className='font-space text-5xl mb-3'>Hi! There</p>
                        <p className='mb-3' >This is <span className='font-shadows text-4xl'>SAJIB HOSEN</span></p>

                        <div className='flex flex-row mb-1' >
                            <p className='flex flex-row' >I'm a  <span className='ml-2' ><TypeWriter /></span> </p>
                        </div>

                        <div>
                            <p className='flex flex-row items-center '>
                                <img data-aos="fade-up" data-aos-duration="3000" width='25px' src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"  alt="mongoDB" />  
                                <span data-aos="fade-up" data-aos-duration="3000" className='px-2 text-white text-4xl font-thin pb-2 '>ex</span>
                                <span data-aos="fade-up"  data-aos-duration="1500" className='px-2 text-2xl'>{react}</span> 
                                <span data-aos="fade-up"  data-aos-duration="1500" className='px-2 text-2xl'>{nodeJs}</span> 
                            </p>
                        </div>

                        <div>
                            <button className=' text-lg hover:border-yellow-100 hover:text-lime-300 border-2 px-2 mt-2 rounded-full transition-all duration-300 ease-liner hover:bg-black hover:bg-opacity-50' >Get Resume</button>
                        </div>
                    </div>
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