import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Meetup from './components/Meetup'
import Directors from './components/Directors'
import Book from './components/Book'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Importing Images" />
        <main>
            <Section title="Kitten Meetup" className="section-kitten-meetup">
                <Meetup />
            </Section>
            <Section title="Kitten's Group Inc." className="section-board-members">
                <Directors />
            </Section>
            <Section title="Book of the Month" className="section-book-of-the-month">
                <Book />
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
