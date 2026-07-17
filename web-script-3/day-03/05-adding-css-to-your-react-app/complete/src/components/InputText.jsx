function InputText({label, id, className, type = 'text', placeholder, value}) {
    return (
        <div className={`input-group input-text-group ${className}`}>
            <label htmlFor={id}>{label}: </label>
            <input type={type} 
                   id={id} 
                   name={id} 
                   placeholder={placeholder} 
                   value={value}
                    />
        </div>
    );
}

export default InputText;
