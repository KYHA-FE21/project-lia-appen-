import { useState, useRef, useEffect } from "react";

const TextArea = ({ prefix, value, onChange, placeholder }) => {

	const [limitCheck, setLimitCheck] = useState(0);

	useEffect(() => {
		if(value !== undefined){
			setLimitCheck(value.replace(/^\s+/g, '').length)
		}
	}, [value])

	return (
		<div className="textArea">
			<span>{`${limitCheck}/400`}</span>
			<textarea 
				maxLength={400}
				id={prefix}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default TextArea;
