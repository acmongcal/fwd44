import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';
import { getYear } from './utilities/utils';

function App() {
  const appInfo = {
    title: "Sword Art Online - Quote of the Day",
    slogan: "Life is not daijobu",
    author: "Kuuhaku",
    copyright: getYear()
  }
  return (
    <div className="App">
      <Header title={appInfo.title}/>
      <Quote />
      <Footer author={appInfo.author} copyright={appInfo.copyright} />
    </div>
  );
}

export default App;
