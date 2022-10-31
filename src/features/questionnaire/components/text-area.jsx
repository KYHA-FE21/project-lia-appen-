import "../styles/components.scss";

const TextArea = ({
	label,
	id,
	value,
	handleChange,
	className = "",
	...restProps
}) => {
	return (
		<div className={`my-6 ${className}`}>
			<label htmlFor={id}>{label}</label>
			<div className="textareaContainer rounded-md shadow p-2 mt-2">
				<textarea
					className="w-full"
					id={id}
					value={value}
					onChange={handleChange}
					{...restProps}
				></textarea>
			</div>
		</div>
	);
};

export default TextArea;
