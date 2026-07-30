import { useEffect } from "react";
import { appTitle } from "../globals/globals";
const PageServices = () => {
    useEffect(()=>{
        document.title = `${appTitle} - Services`;
        const metaTag = document.querySelector('meta[name=description]');
        if (metaTag){
            metaTag.setAttribute("content", `Services Page of ${appTitle}`);
        }
        else{
            const newMetaTag = document.createElement("meta");
            newMetaTag.name = "description";
            newMetaTag.content = `Services Page of ${appTitle}`;
            document.head.appendChild(newMetaTag);
        }
    },[])
  return (
    <section>
      <h2>Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est
        nihil eaque sed nostrum molestiae, omnis fugit fuga ab eos quod
        necessitatibus repudiandae placeat repellat dolorum odio temporibus vel
        sint ipsum quidem modi sit minima assumenda nulla? Consequuntur eum,
        sunt eius fugiat beatae possimus! Quidem dolore voluptatibus expedita
        aliquid obcaecati.
      </p>
    </section>
  );
};

export default PageServices;
