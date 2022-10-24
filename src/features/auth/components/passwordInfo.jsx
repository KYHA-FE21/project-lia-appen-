import React from "react";

const PasswordInfo = React.forwardRef((props, ref) => {
	const upper = () => /[A-Z]/.test(props.password);
	const lower = () => /[a-z]/.test(props.password);
	const number = () => /[0-9]/.test(props.password);
	const special = () => props.password.length > 1 && !/^[0-9A-Za-z]+$/.test(props.password);
	const length = () => props.password.length >= 8;
	const color = (a) => (a ? "text-green" : "text-white");

	return (
		<div ref={ref} className="passwordInfo-container shadow p-4 bg-primary rounded-md text-white text-tiny d-none">
			<h1 className="pb-2">Password must contain:</h1>
			<ul className="pl-4">
				<li className={color(upper())}>Uppercase</li>
				<li className={color(lower())}>Lowercase</li>
				<li className={color(number())}>Number</li>
				<li className={color(special())}>Secial character</li>
				<li className={color(length())}>Min 8 character in length</li>
			</ul>
		</div>
	);
});

export default PasswordInfo;
