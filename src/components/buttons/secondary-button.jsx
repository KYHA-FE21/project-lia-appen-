import "./secondary-button.scss";

function SecondaryButton({
	width,
	fontSize,
	icon,
	color = "black",
	bgColor = "white",
	className = "",
	children,
	...restProps
}) {
	return (
		<button
			className={`secondary-button flex items-center justify-center rounded-md ${className}`}
			style={{ width: width, fontSize: fontSize }}
			{...restProps}
		>
			{children && <span className="p-2 px-4 secondary-button-text">{children}</span>}
			{icon && (
				<div className={`secondary-button-icon flex justify-center items-center p-1 px-4 text-${color} bg-${bgColor}`}>
					{icon}
				</div>
			)}
		</button>
	);
}

export default SecondaryButton;
