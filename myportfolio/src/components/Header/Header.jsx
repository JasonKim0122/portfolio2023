import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header flex flex-col' id='header'>
            {/*nav bar will go here */}
            <div className='container flex'>
                <div className='header-content'>
                    <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>
                        Web design
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Header