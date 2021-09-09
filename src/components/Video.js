import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    likes,
    messages,
    shares,
    song
}) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    // videoRef.play, videoRef.pause()

    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
        videoRef.current.play();
    };
    return (
        <div className="video">
            <video
                src={url}
                ref={videoRef}
                loop
                controls
            ></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    );
}

export default Video;
