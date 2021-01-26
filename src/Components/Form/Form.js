import React, { useState } from 'react';
import Input from '../Controls/Input';
import Checkbox from '../Controls/Checkbox';
import Dropdown from '../Controls/Dropdown';
import Button from '../Button/Button';
import Error from '../Controls/Error';
import useValidation from '../../hooks/Validation';
import './Form.css';

function Form() {
	const { check, errors, clearErrors } = useValidation();
	const [form, setForm] = useState({ name: '', email: '', phone: '' });
	const changeHandler = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const onSubmit = e => {
		e.preventDefault();
		clearErrors();
		check(form);
	};
	return (
		<>
			<div className='container'>
				<form className='container-form' onSubmit={e => onSubmit(e)}>
					<h1 className='register'>Регистрация</h1>
					<div className='post-register'>
						Уже есть аккаунт ? <a href='/'>Войти</a>
					</div>
					<Input
						label={'Имя'}
						value={form.name}
						changeHandler={changeHandler}
						id={'name'}
						name={'name'}
						placeholder={'Введите ваше имя'}
					/>
					{errors.name ? <Error message={errors.name} /> : null}
					<Input
						label={'Email'}
						value={form.email}
						changeHandler={changeHandler}
						id={'email'}
						name={'email'}
						placeholder={'Введите ваш email'}
					/>
					{errors.email ? <Error message={errors.email} /> : null}
					<Input
						label={'Номер телефона'}
						value={form.phone}
						placeholder={'Введите номер телефона'}
						changeHandler={changeHandler}
						id={'phone'}
						name={'phone'}
					/>
					{errors.phone ? <Error message={errors.phone} /> : null}

					<Dropdown
						className='form-dropdown'
						options={['Русский', 'Английский', 'Китайский', 'Испанский']}
						label={'Язык'}
					/>
					<div className='checkbox-label'>
						<Checkbox />{' '}
						<span>
							Принимаю <a href='/'> условия </a> использования{' '}
						</span>
					</div>
					<div className='register-btn'>
						<Button form={form} title={'Зарегистрироваться'} />
					</div>
				</form>
			</div>
		</>
	);
}

export default Form;
