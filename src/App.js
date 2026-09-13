import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;