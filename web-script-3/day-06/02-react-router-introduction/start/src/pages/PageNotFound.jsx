// Page - Not Found
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
const PageNotFound = () => {
	useEffect(()=>{
		document.title = "404 Page not Found";
		const metaTag = document.querySelector('meta[name=description]');
		if (metaTag){
			metaTag.setAttribute("content", "404 Page not Found");
		}
		else{
			const newMetaTag = document.createElement("meta");
			newMetaTag.name = "description";
			newMetaTag.content = "404 Page not Found";
			document.head.appendChild(newMetaTag);
		}
	},[]) 
	return (
		<section className="page-not-found-section">
			<h2>404 ... : </h2>
			<p>Page not found.</p>
			{/* The below anchor tag code is incorrect...
			    Use React Router's Link component for internal 
				links */}
			<p>Go to <a href="/">Home</a> page.</p>
		</section>
	);
	
};

export default PageNotFound;