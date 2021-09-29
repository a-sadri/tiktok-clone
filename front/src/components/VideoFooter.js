import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

export default function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@a-sadri</h3>
        <p>Fullstack programmer</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />

          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter__record'
        src='https://static.thenounproject.com/png/934821-200.png'
        alt=''
      />
    </div>
  );
}
