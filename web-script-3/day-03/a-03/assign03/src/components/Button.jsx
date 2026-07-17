
function Button({
    buttonDetails,
    key,
    updateValue
}){
    return(
        <button className={buttonDetails.className} onClick={()=>
            updateValue(buttonDetails)} 
            key={key} 
            value={buttonDetails.value}>
            {buttonDetails.text}
        </button> 
    )
}

export default Button;