import Container from "./container";

function Heading({ heading, subheading, icon, className, style }) {
	return (
		<Container type="h1" display="grid" className={`gap-1 ${className && className}`} style={style}>
			<Container type="span" display="flex" className="text-2xl justify-between">
				<span className="flex items-center">{heading}</span>
				{icon && <span>{icon}</span>}
			</Container>
			{subheading && <small className="text-center text-m">{subheading}</small>}
		</Container>
	);
}

export default Heading;
