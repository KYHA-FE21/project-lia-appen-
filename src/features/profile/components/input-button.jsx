import React from "react";

const InputButton = ({
	children,
	id,
	value,
	label,
	type,
	checked,
	onChange,
	onClick,
	placeholder,
	name,
}) => {
	return (
		<>
			<input
				id={id}
				type={type}
				value={value || children}
				placeholder={placeholder}
				checked={checked}
				onChange={onChange}
				onClick={onClick}
				name={name}
				className="flex center gap-1 bg-primary"
			/>

			{label !== undefined && (
				<label htmlFor={id} className="flex center evenly">
					{label}
				</label>
			)}
		</>
	);
};

export default InputButton;
