function Heading({ props }) {
	const { heading, subheading, icon, className: propClassName, style: propStyle } = props;
	const className = "" + ` ${propClassName}`;
	return (
		<h1 className={className} style={{ display: "grid", gap:"0.8em" }}>
			<span
				style={{
					fontSize: "1.5rem",
					display: "flex",
					justifyContent: "space-between",
					...propStyle,
				}}
			>
				<span>{heading}</span>
				{icon && <span>{icon}</span>}
			</span>
			{subheading && <small style={{ textAlign: "center" }}>{subheading}</small>}
		</h1>
	);
}

export default Heading;
