import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const appInfo = {
    title: "App desu",
    slogan: "Life is not daijobu",
    author: "Kuuhaku"
  }
  return (
    <div className="App">
      <Header title={appInfo.title} slogan={appInfo.slogan}/>
      <Main />
      <Footer author={appInfo.author} />
    </div>
  );
}

export default App;
