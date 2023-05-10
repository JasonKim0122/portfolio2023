import React, {useRef, useState} from 'react';
import './AboutMe.css';
import images from '../../constants/images';
import {aboutMe} from '../../constants/data';

const AboutMe = () => {
    return(
        <div className='about section-p'>
            <div className='container'>
                <div className='about-content'>
                    <div className='about-grid grid'>
                        <img src={images.aboutMe_img_1} alt='' className='about-img mx-auto' />
                        <div className='section-title'>
                            <h3 className='text-primary'>I'm <span className='text-secondary'>Jason</span></h3>
                            <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In eius nisi architecto quae, inventore quas ipsam deserunt cupiditate sit exercitationem reprehenderit, praesentium natus, illo esse expedita non totam! Quaerat, tempora!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe