import React from 'react';

const VolumeControl = ({ volume, setVolume }) => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className='flex items-center space-x-2'>
                <span className="text-gray-600">Volume</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-48 h-2 bg-gray-200 rounded-lg cursor-pointer"
                />
            </div>
        </div>
    );
};

export default VolumeControl;
