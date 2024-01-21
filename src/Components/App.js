import Login from './Login';
import Register from './Register'; // eslint-disable-next-line 
import Stores from './Stores';

function App() {
  return (
    <>
      <h1 className='message'>Good morning World</h1>
      <Login/>
      <Register/>
      <Stores/>
    </>
    
  );
}

export default App;
