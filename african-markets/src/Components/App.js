import Login from './Login';
import { useMemo } from "react";
import Register from './Register';

function App() {
  return (
    <>
      <h1 className='message'>Good morning World</h1>
      <Login/>
      <Register/>
    </>
    
  );
}

export default App;
