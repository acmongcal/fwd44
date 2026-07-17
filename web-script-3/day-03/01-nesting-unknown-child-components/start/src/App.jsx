import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Nesting Unknown Child Components" />
        <main></main>
        <Footer
            credit="https://openlibrary.org/"
            creditText="Open Library"
            imageCredit={true}
        />
    </div>
  )
}

export default App
