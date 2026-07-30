// Page - Contact
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
const PageContact = () => {
	useEffect(()=>{
		document.title = `${appTitle} - Contact`;
		const metaTag = document.querySelector('meta[name=description]');
		if (metaTag){
			metaTag.setAttribute("content", `Contact Page of ${appTitle}`);
		}
		else{
			const newMetaTag = document.createElement("meta");
			newMetaTag.name = "description";
			newMetaTag.content = `Contact Page of ${appTitle}`;
			document.head.appendChild(newMetaTag);
		}
	},[])
	return (
    	<section>
			<h2>Contact Me</h2>
			<p>Email me at: <a href="mailTo:fwd@bcit.ca">fwd@bcit.ca</a></p>
		</section>
	);

};

export default PageContact;

