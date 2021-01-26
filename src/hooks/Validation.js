import { useState, useCallback } from 'react';

const useValidation = () => {
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const check = useCallback(
		form => {
			if (!validateEmail(form.email)) {
				setErrors({ ...errors, email: 'Введен некорректный email' });
			}
			if (!validateName(form.name)) {
				setErrors({ ...errors, name: 'Введено некорректное имя' });
			}
			if (!validatePhone(form.phone)) {
				setErrors({ ...errors, phone: 'Введен некорректный телефон' });
			}
			return;
		},
		[errors]
	);

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	function validateName(name) {
		const re = /^[a-zA-Z\s]*$/;
		return re.test(String(name).toLowerCase());
	}
	function validatePhone(phone) {
		const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
		return re.test(String(phone).toLowerCase());
	}
	const clearErrors = useCallback(
		() => setErrors({ ...errors, name: '', email: '', phone: '' }),
		[errors]
	);

	return { errors, check, clearErrors };
};

export default useValidation;
