import { useEffect } from "react";
import { appTitle } from "../globals/globals";
function PageProducts (){

    useEffect(()=>{
        document.title = `${appTitle} - Products`;
        const metaTag = document.querySelector('meta[name=description]');
        if (metaTag){
            metaTag.setAttribute("content", `Products Page of ${appTitle}`);
        }
        else{
            const newMetaTag = document.createElement("meta");
            newMetaTag.name = "description";
            newMetaTag.content = `Products Page of ${appTitle}`;
            document.head.appendChild(newMetaTag);
        }
    },[])
    return(
        <section>
            <section>
                <h2>Products Page</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo unde explicabo labore molestiae quaerat vel rerum velit ipsa iure omnis.</p>
            </section>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>Product 5</li>
            </ul>
        </section>
    );
}

export default PageProducts;