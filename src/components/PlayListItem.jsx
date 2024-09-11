import React from 'react';

const PlayListItem = () => {
    return (
        <div className="`flex justify-between items-center rounded-lg cursor-pointer">
            <div classname='flex flex-col'>
                <h3 className="text-sm font-semibold">Electric Fever</h3>
                <p className="text-xs text-gray-500">Neon Jungle</p>
            </div>
            <div className="text-gray-400 text-sm">
                <p>8:41</p>
            </div>
        </div>
    );
};

export default PlayListItem;
