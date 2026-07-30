import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageContact = () => {

    useEffect(() => {
        document.title = `${appTitle} - Contact`;
    }, []);

    return (
        <main>
            <section>
                <h2>Contact Page</h2>
                <article>
                    <h2>Email</h2>
                    <p>foo [at] foo.com</p>
                </article>
                <article>
                    <h2>Telephone</h2>
                    <p><a href="tel:604-555-7890">604.555.7890</a></p>
                </article>
            </section>
        </main>
    );
    
};

export default PageContact;