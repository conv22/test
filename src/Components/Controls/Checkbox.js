import React from 'react';
import './Input.css';

function Checkbox() {
	return (
		<label className='checkbox'>
			<input type='checkbox' />
			<span className='checkmark'></span>
		</label>
	);
}

export default Checkbox;
