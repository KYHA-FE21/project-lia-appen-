function Heading({ props }) {
	const { heading, subheading, icon } = props;
	return (
		<h1 className="heading">
			{heading}
			{icon && <span>{icon}</span>}
			{subheading && <small>{subheading}</small>}
		</h1>
	);
}

export default Heading;
