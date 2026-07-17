import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Books from './components/Books'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Importing Files" />
        <main>
            <Section title="Books" className="section-books">
                <Books />
            </Section>
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
