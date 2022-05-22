function Input({ value }) {
    return (<input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
    />
    );
}

export default Input;