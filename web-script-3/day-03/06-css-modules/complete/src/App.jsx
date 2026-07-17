import Header from "./components/Header"
import Section from "./components/Section"
import Meetup from "./components/Meetup"
import Directors from "./components/Directors"
import TermsOfUse from "./components/TermsOfUse"
import SignUp from "./components/SignUp"
import Footer from "./components/Footer"

import "./styles/App.css"

function App() {

	return (
		<div className="wrapper">
			<Header title="Adding CSS" />
			<main>
				<Section
					title="Kitten Meetup"
					className="section-kitten-meetup"
				>
					<Meetup />
				</Section>
				<Section
					title="Kitten's Group Inc."
					className="section-board-members"
				>
					<Directors />
				</Section>
				<Section title="Terms of Use" className="section-terms-of-use">
					<TermsOfUse />
				</Section>
				<Section
					title="Sign Up for Our Newsletter"
					className="section-newsletter-sign-up"
				>
					<SignUp />
				</Section>
			</main>
			<Footer />
		</div>
	)
}

export default App
