import React from 'react';
import './Input.css';

function Input({ label, placeholder, id, changeHandler, name }) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type='text'
				name={name}
				onChange={e => changeHandler(e)}
				placeholder={placeholder}
				id={id}
			/>
		</>
	);
}

export default Input;
