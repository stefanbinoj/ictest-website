import React, { useState, useEffect } from 'react';
import './gallery.css';

import image1 from '../gallery_images/image1.JPG';
import image2 from '../gallery_images/image2.JPG';
import image3 from '../gallery_images/image3.JPG';
import image5 from '../gallery_images/image5.JPG';
import image6 from '../gallery_images/image6.JPG';
import image7 from '../gallery_images/image7.JPG';
import image9 from '../gallery_images/image9.JPG';
import image10 from '../gallery_images/image10.JPG';


const ImageGallery = () => { 
    const images = [
        { src: image1},
        { src: image2},
        { src: image3},
        { src: image5},
        { src: image6},
        { src: image7},
        { src: image9},
        { src: image10},
    ];

    return (
        <div className='gallery-container'>
            <h2 className='gallery-title'>Event Highlights</h2>
            <div className='gallery-grid'>
                {images.map((image, index) => (
                    <div key={index} className='gallery-item'>
                        <img src={image.src} alt={image.alt} className='gallery-image' />
                    </div>
                ))}
            </div>
            <p>All Publications can be found <a href="https://ieeexplore.ieee.org/xpl/conhome/10576062/proceeding" target='_blank'>here</a></p>
            </div>
);
};

export default ImageGallery;
