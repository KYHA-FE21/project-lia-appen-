import React from "react";
import "../styles/components.scss";

const TextArea = ({ label, placeholder, rows, id, value, setValue }) => {
	return (
		<div className="my-6">
			<label htmlFor={id}>{label}</label>
			<div className="textareaContainer shadow p-2 mt-2">
				<textarea
					className="w-full"
					id={id}
					rows={rows}
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></textarea>
			</div>
		</div>
	);
};

export default TextArea;
