import { useRef, useState } from 'react';
import './Video.css';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src='/videos/2.mp4'
      ></video>
    </div>
  );
}
