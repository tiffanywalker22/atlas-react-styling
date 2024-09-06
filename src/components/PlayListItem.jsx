import React from 'react';

const PlayListItem = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md my-2">
            <div>
                <h3 className="text-lg font-semibold">Electric Fever</h3>
                <p className="text-sm text-gray-600">Neon Jungle</p>
            </div>
            <div className="text-gray-500">
                <p>8:41</p>
            </div>
        </div>
    );
};

export default PlayListItem;
