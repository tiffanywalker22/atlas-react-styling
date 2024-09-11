import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-md w-full mx-auto p-6 rounded-lg shadow-lg h-full">
            <div className="flex-1 bg-sage text-blue border-pink p-4 rounded-lg flex flex-col h-full">
                <CurrentlyPlaying />
            </div>
            <div className="flex-1 bg-purple text-blue border-l-4 border-pink p-4 rounded-lg flex flex-col h-full">
                <Playlist />
            </div>
        </div>
    );
};

export default MusicPlayer;
