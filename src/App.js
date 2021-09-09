import './App.css';
import React, { useState } from 'react';
import Video from './Video';
import { useEffect } from 'react';
import db from './components/firebase';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())));
  }, [videos]);
  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(({ url, song, shares, likes, messages, channel, description }) =>
          < Video
            url={url}
            song={song}
            likes={likes}
            messages={messages}
            channel={channel}
            shares={shares}
            description={description}
          />
        )}
      </div>


    </div>
  );
}

export default App;
