import React from "react";

const useFocus = () => {
	const infoRef = React.useRef();

	const handlePasswordFocus = () => {
		infoRef.current.classList.remove("d-none");
	};
	const handlePasswordBlure = () => {
		infoRef.current.classList.add("d-none");
	};

	return { infoRef, handlePasswordFocus, handlePasswordBlure };
};

export default useFocus;
