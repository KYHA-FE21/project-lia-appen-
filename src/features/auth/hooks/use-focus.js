import React from "react";

const useFocus = () => {
	const infoRef = React.useRef();

	const handlePasswordFocus = () => {
		infoRef.current.classList.remove("hidden");
	};
	const handlePasswordBlur = () => {
		infoRef.current.classList.add("hidden");
	};

	return { infoRef, handlePasswordFocus, handlePasswordBlur };
};

export default useFocus;
