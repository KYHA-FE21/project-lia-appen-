import React from "react";

const Select = ({ icon = null, isError = false, value, handleChange, className = "", ...restProps }) => {
	const ref = React.useRef(null);

	const handleClick = () => {
		ref.current.focus();
	};

	return (
		<div className="globalInputContainer" onClick={handleClick}>
			<div className="globalInputContent">
				{icon && <span className="globalInputIcon">{icon}</span>}
				<select
					ref={ref}
					className={`globalInputContent globalInputField ${!value ? "text-grey" : "text-black"}  ${className}`}
					value={value}
					onChange={handleChange}
					{...restProps}
				>
					<option value="" disabled defaultValue hidden>
						Hybrid
					</option>
					<option value="hybrid">Hybrid</option>
					<option value="location">På plats</option>
					<option value="remote">Remote</option>
				</select>
			</div>
		</div>
	);
};

export default Select;
