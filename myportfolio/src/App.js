import './App.css';
import './assets/js/script';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Work from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
    </div>
  );
}

export default App;
