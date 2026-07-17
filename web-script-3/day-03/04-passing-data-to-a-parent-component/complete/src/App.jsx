import { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import Rename from './components/Rename'
import './App.css'

function App() {
    const [appName, setAppName] = useState('My App');

    function handleRename(newName) {
        setAppName(newName)
        document.title = newName;
    }

    return (
        <div className="wrapper">
            <Header title={appName} />
            <main>
                <Section title="Rename Your App" className="section-rename-your-app">
                    <Rename handleRename={handleRename} />
                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default App
