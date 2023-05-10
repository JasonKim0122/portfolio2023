import React, {useState} from 'react';
import './Works.css';
import {ImCancelCircle} from 'react-icons/im';
import {BsPlusLg} from 'react-icons/bs';
import { works } from '../../constants/data';

const Work = () => {
const [imageModal, setImageModal] = useState(false);
const [imageSource, setImageSource] = useState('');

const setImageOnModal = (src) => {
    setImageModal(true);
    setImageSource(src);
}

    return (
        <div className='work section-p bg-grey' id='work'>
            <div className={imageModal ? 'image-box show-image-box' : 'image-box'}>
                <div className='image-box-content'>
                    <img src= {imageSource} alt='' />
                    <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                        <ImCancelCircle size= {30} />
                    </span>
                </div>
            </div>
            <div className='container'>
                <div className='work-content'>
                    <div className='section-title'>
                        <h3 className='text-primary'>Latest <span className='text-secondary'>Works</span></h3>
                        <p className='text'>Here are some of my current Works</p>
                    </div>

                    <div className='work-list grid'>
                        {
                            works.map((work,index) => {
                                return(
                                    <div className='work-item text-center' key={index} onClick={() => setImageOnModal(work.image)}>
                                        <img src= {work.image} alt='' />
                                        <span className='work-item-icon'>
                                            <BsPlusLg size ={40} className='text-primary' />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work