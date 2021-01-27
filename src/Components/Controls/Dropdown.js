import React, { useState } from 'react';
import './Input.css';
import uuid from 'react-uuid';
import Icon from '../../Images/Icon.svg';

function Dropdown({ options }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState('Язык');
	const select = option => {
		setSelected(option);
		setOpen(false);
	};
	return (
		<>
			<div className={open ? 'dropdown active' : 'dropdown'}>
				<span>{selected}</span>
				<button type='button' onClick={() => setOpen(!open)}>
					<img className='dropdown-icon' src={Icon} alt='' />
				</button>
			</div>
			{open ? (
				<div className='dropdown-content'>
					<ul className='dropdown-ul'>
						{options.map(option => (
							<li
								key={uuid()}
								className={selected === option ? 'active' : null}
								onClick={() => select(option)}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	);
}

export default Dropdown;
