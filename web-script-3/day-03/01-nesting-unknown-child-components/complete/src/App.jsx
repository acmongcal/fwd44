import Book from './components/Book'
import Section from './components/Section'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <div className="wrapper">
        <Header title="Nesting Unknown Child Components" />
        <main>
            <Section title="Our Books" className="section-about-our-books">
                <article>
                    <h2>About Our Book Selection Process</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia labore est modi nam adipisci in sequi ratione consectetur quaerat, inventore voluptatem pariatur dicta quos laboriosam voluptate ab rem repellat culpa!</p>
                </article>
            </Section>
            <Section title="Featured Book" classname="section-featured-books">
                <Book
                    title="Robots and Empire"
                    published={1985}
                    author="Isaac Asimov"
                    cover="https://covers.openlibrary.org/b/id/9302088-L.jpg"
                    rating={3.83}
                />
            </Section>
        </main>
        <Footer
            credit="https://openlibrary.org/"
           
        />
    </div>
  )
}

export default App
