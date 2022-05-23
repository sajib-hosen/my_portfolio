import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <div>
            <div className='font-space' >
            <Typewriter className=''onInit = { (typewriter) => { typewriter
                        .typeString(' Fontend _ Developer')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(' Backend _ Developer')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(' JavaScript _ Developer')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(' React.JS _ developer')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(' Full-Stack _ Web-Developer')
                        .pauseFor(1000)
                        .callFunction(() =>{
                            // if you have any function to call, write here
                        })
                        .start() }} />
            </div>
        </div>
    );
};

export default TypeWriter;