// Page - Home
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
const PageHome = () => {

    useEffect(()=>{
        document.title = `${appTitle} - Home`;
        const metaTag = document.querySelector('meta[name=description]');
        if (metaTag){
            metaTag.setAttribute("content", `Home Page of ${appTitle}`);
        }
        else{
            const newMetaTag = document.createElement("meta");
            newMetaTag.name = "description";
            newMetaTag.content = `Home Page of ${appTitle}`;
            document.head.appendChild(newMetaTag);
        }
    },[])

    return (
        <section>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
        </section>
    );

};

export default PageHome;