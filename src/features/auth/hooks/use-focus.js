import React from "react";

const useFocus = () => {
	const infoRef = React.useRef();

	const handlePasswordFocus = () => {
		infoRef.current.classList.remove("hidden");
	};
	const handlePasswordBlure = () => {
		infoRef.current.classList.add("hidden");
	};

	return { infoRef, handlePasswordFocus, handlePasswordBlure };
};

export default useFocus;
