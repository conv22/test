import React from 'react';
import './Button.css';

function Button({ title, form }) {
	const { name, email, phone } = form;
	const enabled = name.length > 0 && email.length > 0 && phone.length > 0;
	return (
		<button className='button' type='submit' disabled={!enabled}>
			{title}
		</button>
	);
}

export default Button;
