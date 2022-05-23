import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='absulate' >
              <div className='bg-black bg-opacity-50 flex flex-row justify-between items-center' >
                <div>
                    <p className='ml-8 p-2 font-shadows text-2xl font-bold'>S A J I B _ H O S E N</p>
                </div>
                <li className='p-2 font-poppins flex flex-row justify-end' >
                    <NavLink to='/home' className={({ isActive })=> `block transition-all duration-300 ease-linear ml-3 p-2 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>Home</NavLink>
                    <NavLink to='/projects' className={({ isActive })=> `block transition-all duration-300 ease-linear ml-3 p-2 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>Projects</NavLink>
                    <NavLink to='/skils' className={({ isActive })=> `block transition-all duration-300 ease-linear ml-3 p-2 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>Skils</NavLink>
                    <NavLink to='/blogs' className={({ isActive })=> `block transition-all duration-300 ease-linear ml-3 p-2 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>Blogs</NavLink>
                    <NavLink to='/about' className={({ isActive })=> `block transition-all duration-300 ease-linear ml-3 p-2 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>About</NavLink>
                    <NavLink to='/contact' className={({ isActive })=> `block transition-all duration-300 ease-linear p-2 ml-3 mr-4 hover:border-lime-300 ${ isActive ? ' text-white border-b-2 border-white ': 'border-b-2 border-black border-opacity-50 ' }` }>Contact</NavLink>
                </li>
            </div>
            
        </div>
    );
};

export default NavigationBar;