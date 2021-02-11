import logo from './logo.svg';
import './scss/App.scss';

import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {
  return (
    //React.Fragment
    <>
    <div className="wapper">
    <Header　/>
    <Navigation　/>
    </div>
    </>
  );
}

export default App;
