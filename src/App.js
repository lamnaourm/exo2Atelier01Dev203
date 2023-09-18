import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
