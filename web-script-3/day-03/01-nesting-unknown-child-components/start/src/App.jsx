import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Book'
import Section from './components/Section'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Nesting Unknown Child Components" />
        <main>
          <Section title="Our Books" 
          className="section-about-our-books"
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea nemo explicabo error maxime cum autem dolores laboriosam sunt quis?</p>
          </Section>
          <Section title="Featured book" className="section-featured-books">
            <Book
            title="Robots and Empire"
            published={1985}
            author ="Isaac ASimov"
            cover="https://covers.openlibrary.org/b/id/9302088-L.jpg"
            rating ={3.83} 
            />
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
