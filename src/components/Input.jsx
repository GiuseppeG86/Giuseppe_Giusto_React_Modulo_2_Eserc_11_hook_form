function Input({children, type, id, placeholder}){
    return (
        <div>
            <label htmlFor={id}>{children}</label>
            <input type={type} id={id} placeholder={placeholder}/>
        </div>
    )
}

export default Input