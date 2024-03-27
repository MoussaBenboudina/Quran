// App.tsx
import Audio from './cmponent/Audio';
import './App.css';

function App() {
  // Provide default or placeholder values for props
  const defaultAudioProps = {
    id: 'default-id',
    name: 'Default Audio',
    image: 'default-image-url',
    path: 'default-audio-path',
    singer: 'Unknown Singer',
  };

  return (
    <>
      <Audio {...defaultAudioProps} />
    </>
  );
}

export default App;
