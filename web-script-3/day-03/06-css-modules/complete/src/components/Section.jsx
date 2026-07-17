function Section({title, className, children}) {
    return (
        <section className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;
