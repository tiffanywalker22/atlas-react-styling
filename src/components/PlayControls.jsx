import React from 'react';

const PlayControls = () => {
    return (
        <div className="flex justify-center gap-4">
            <button className="bg-gray-200 p-2 rounded">Speed</button>
            <button className="bg-gray-200 p-2 rounded">Back</button>
            <button className="bg-gray-200 p-2 rounded">Play</button>
            <button className="bg-gray-200 p-2 rounded">Forward</button>
            <button className="bg-gray-200 p-2 rounded">Shuffle</button>
        </div>
    );
};

export default PlayControls;
