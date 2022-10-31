import React from "react";

const TextArea = ({ prefix, value, onChange, placeholder }) => {
	return (
		<div className="textArea">
			<span>0/120</span>
			<textarea
				id={prefix}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default TextArea;
