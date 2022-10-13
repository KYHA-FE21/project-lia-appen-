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
			className={`shadow overflow-hidden flex items-center justify-center rounded-md ${className}`}
			style={{ width, fontSize, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
			{...restProps}
		>
			{children && <span className="flex font-bold w-full h-full overflow-hidden items-center p-3 px-4">{children}</span>}
			{icon && (
				<div className={`ml-auto p-2 h-full flex justify-center items-center p-1 text-${color} bg-${bgColor}`}>
					{icon}
				</div>
			)}
		</button>
	);
}

export default SecondaryButton;
