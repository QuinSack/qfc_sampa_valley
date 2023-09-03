import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRoutes />
    </div>
  );
}


export default App;
