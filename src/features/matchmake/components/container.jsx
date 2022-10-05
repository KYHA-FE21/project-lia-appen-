import { createElement } from "react";

function Container({ className, children, type, display, style: styleProp, id }) {
	const style = {
		display,
		...styleProp,
	};
	return createElement(type || "div", { id, className, style }, children);
}

export default Container;
