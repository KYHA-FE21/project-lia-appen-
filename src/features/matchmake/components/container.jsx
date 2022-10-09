import { createElement, forwardRef } from "react";

const Container = forwardRef(({ className, children, type, display, style: styleProp, id }, ref)=>{
	const style = {
		display,
		...styleProp,
	};
	return createElement(type || "div", { ref, id, className, style }, children);
})

export default Container;
