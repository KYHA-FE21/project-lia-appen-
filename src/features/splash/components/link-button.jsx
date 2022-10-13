function LinkButton({
	children,
	bgColor = "primary",
	textColor = "white",
	className = "",
	...restProps
}) {
	return (
		<a
			{...restProps}
			className={`rounded-md p-2 bg-${bgColor} text-${textColor} grow flex justify-center no-underline shadow ${className}`}
		>
			{children}
		</a>
	);
}

export default LinkButton;
