import quotes from "../quotes";
import { useState } from "react";

import { getRandomIndex } from "../utilities/utils";

function Quote(){
    const [currentQuote, setCurrentQuote] = useState({quote:"Click the button to get a quote",author:""});
    const [quotesArray, setQuotesArray] = useState(quotes);
    const [button, setButton] = useState("Get Quote");
    function getQuote(){
        console.log(quotesArray.length);
        if(quotesArray.length==0){
            setQuotesArray(quotes);
        } else {
            const randomIndex = getRandomIndex(quotesArray.length);
            setCurrentQuote({quote:quotesArray[randomIndex].quote, author:quotesArray[randomIndex].author});
            setQuotesArray(quotesArray.filter((quote, i) => i !== randomIndex));
            setButton("Get Another Quote");
        }

    }
    return(
        <main>
            <section>
                <blockquote>
                    <p>{currentQuote.quote}</p>
                    {currentQuote.author && <cite>-{currentQuote.author }</cite>}
                </blockquote>
                <button onClick={getQuote}>{button}</button>
            </section>
        </main>
    );
}

export default Quote;