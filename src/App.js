import './App.css';
import Layout from './components/Layout';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = () => {
    setIsAuthenticated(true);
  }
  return (
    <div className='App'>
      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleSignIn}}>
        <Layout />
      </AuthContext.Provider>
    </div>
  );
}


export default App;
