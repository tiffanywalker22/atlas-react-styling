import React from 'react';
import placeholderImg from "../assets/placeholder.svg";


const CoverArt = () => {
    return (
        <div className="flex justify-center items-center h-full mb-4">
            <img src={placeholderImg} alt="cover art" className="object-cover w-80 h-80" />
        </div>
    );
};

export default CoverArt;
