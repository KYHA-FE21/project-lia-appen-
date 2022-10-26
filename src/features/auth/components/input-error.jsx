import React from "react";

const InputError = ({ error, type }) => {
	return (
		<>
			{error?.type === type && (
				<div className={`text-tiny text-red ${error.message ? "flex" : "d-none"}`}>{error.message}</div>
			)}
		</>
	);
};

export default InputError;
