import './App.css';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='Container'>
      <Header />
      <BackgroundImage />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
