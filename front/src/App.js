import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url='/videos/2.mp4'
          channel='a-sadri'
          description='mern stack clone'
          song='song of favorite'
          likes={132}
          messages={33}
          shares={332}
        />
        <Video
          url='/videos/3.mp4'
          channel='a-sadri'
          description='mern stack clone'
          song='song of favorite'
          likes={132}
          messages={33}
          shares={332}
        />
      </div>
    </div>
  );
}

export default App;
