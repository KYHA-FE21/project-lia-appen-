import React from "react";
import translate from "../../../translate";

const Select = ({
	icon = null,
	isError = false,
	value,
	handleChange,
	className = "",
	...restProps
}) => {
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
					className={`globalInputContent globalInputField ${
						!value ? "text-grey" : "text-black"
					}  ${className}`}
					value={value}
					onChange={handleChange}
					{...restProps}
				>
					<option value="" disabled defaultValue hidden>
						{translate("hybrid", true)}
					</option>
					{["hybrid", "location", "remote"].map((option) => (
						<option key={option} value={option}>
							{translate(option)}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Select;
