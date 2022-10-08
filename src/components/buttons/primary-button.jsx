import "./primary-button.scss";

function PrimaryButton({
	width,
	fontSize,
	icon,
	className = "",
	children,
	...restProps
}) {
	return (
		<button
			className={`primary-button p-2 px-4 flex justify-center items-center gap-1 rounded-md text-white bg-primary ${className}`}
			style={{ width: width, fontSize: fontSize }}
			{...restProps}
		>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
}

export default PrimaryButton;
