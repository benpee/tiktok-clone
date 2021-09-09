import React, { useState } from 'react';
import './VideoSidebar.css';
import { ShareIcon, MessageIcon, FavoriteBorderIcon, FavoriteIcon } from 'material-ui/icons';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);
    const likeHandler = e => setLiked(false);
    const unlikeHandler = e => setLiked(true);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <>
                        <FavoriteIcon fontSize="large" onClick={likeHandler} />
                        <p>{liked ? likes + 1 : likes}</p>
                    </>
                ) : <FavoriteBorderIcon onClick={unlikeHandler} fontSize="large" />
                }
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;
