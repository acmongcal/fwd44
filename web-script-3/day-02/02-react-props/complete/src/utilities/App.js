import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const appInfo = {
    title: 'My First App',
    slogan: 'Best App Ever!!!',
    author: 'Michael LaRoy',
    copyright: 2021
  }

  return (
    <div className="App">
      <Header title={appInfo.title} slogan={appInfo.slogan} />
      <Main />
      <Footer copyright={appInfo.copyright} author={appInfo.author} />
    </div>
  );

}

export default App;
