import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Importing Files" />
        <main>
            <Section title="Books" className="section-books" />
        </main>
        <Footer
            credit="https://openlibrary.org/"
            creditText="Open Library"
            imageCredit={true}
        />
    </div>
  )
}

export default App
