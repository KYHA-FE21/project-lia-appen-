import React from "react";
import { useState, useEffect } from "react";

const Title = ({ children, img, size, bold, subTitle, className = "" }) => {
	const [styleSize, setStyleSize] = useState();
	const [styleBold, setStyleBold] = useState();

	useEffect(() => {
		if (size !== undefined) setStyleSize(size.join("rem ") + "rem");
	}, [size]);

	useEffect(() => {
		if (bold !== undefined) setStyleBold(bold);
	}, [bold]);

	return (
		<h2
			className={`${img !== undefined ? "title" : ""} ${className}`}
			style={{
				fontSize: styleSize || 1 + "rem",
				fontWeight: styleBold || 400,
			}}
		>
			{img}
			<span className="flex items-center justify-center">{children}</span>
			{subTitle && (
				<>
					<br />
					<span className="subTitle">{subTitle}</span>
				</>
			)}
		</h2>
	);
};

export default Title;
