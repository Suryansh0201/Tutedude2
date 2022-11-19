import './App.css';
import Navbar from './components/navbar/navbar';
import Topcontent from './components/topContent/topcontent';
import MidContent from './components/MidContent/midContent';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topcontent/>
      <MidContent/>
      <Footer/>
    </div>
  );
}

export default App;
