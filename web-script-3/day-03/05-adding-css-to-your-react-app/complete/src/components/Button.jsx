import '../styles/Button.css';

function Button({className = 'default', text, type}) {
    return (
        <button className={`btn ${className}`} type={type}>
            <span className="btn-text">{text}</span>
        </button>
    );
}

export default Button;
