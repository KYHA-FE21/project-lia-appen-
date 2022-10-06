function Heading({ props }) {
	const { heading, subheading, icon } = props;
	return (
		<h1 className="heading">
			{heading} <span>{icon}</span>
			<small>{subheading}</small>
		</h1>
	);
}

export default Heading;
