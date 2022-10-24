function Button({
	width,
	fontSize,
	icon,
	color,
	className = "",
	children,
	...restProps
}) {
	let colors = "";
	if (color === "primary" || !color) colors = "text-white bg-primary";
	else if (color === "white") colors = "text-black bg-white";
	else if (color === "black") colors = "text-white bg-black";

	return (
		<button
			className={`shadow p-3 flex justify-center items-center gap-1 rounded-md ${colors} ${className}`}
			style={{ width: width, fontSize: fontSize }}
			{...restProps}
		>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
}

export default Button;
