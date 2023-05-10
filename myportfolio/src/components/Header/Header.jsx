import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='header flex flex-col' id='header'>
            <Navbar />

            <div className='container flex'>
                <div className='header-content'>
                    <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>
                        Web design
                    </h2>
                    <h1 className='text-white fw-4 header-title'>
                        Hello my name is Jason an aspiring
                        <span className='text-primary'> Full Stack Developer </span> 
                        living in Plano, Texas
                    </h1>
                    <div className='btn-groups flex'>
                        <button type='button' className='btn-item bg-primary fw-3 ls-2'>See Work</button>
                        <button type='button' className='btn-item bg-secondary fw-3 ls-2'>Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header