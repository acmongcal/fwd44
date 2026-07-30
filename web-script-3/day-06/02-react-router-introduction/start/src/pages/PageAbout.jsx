// Page - About
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
const PageAbout = () => {
	useEffect(()=>{
		document.title = `${appTitle} - About`;
		const metaTag = document.querySelector('meta[name=description]');
		if (metaTag){
			metaTag.setAttribute("content", `About Page of ${appTitle}`);
		}
		else{
			const newMetaTag = document.createElement("meta");
			newMetaTag.name = "description";
			newMetaTag.content = `About Page of ${appTitle}`;
			document.head.appendChild(newMetaTag);
		}
	},[])
	return (
		<section>
			<h2>About Page</h2>
			<p>Saepe vitae deserunt cupiditate vel reiciendis adipisci quasi. At, dolore qui, saepe similique id repellat ipsam sapiente repellendus commodi deleniti natus itaque hic temporibus nam nobis tempora enim suscipit quas!</p>
		</section>
	);
	
};

export default PageAbout;