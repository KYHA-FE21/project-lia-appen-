import Container from "./container";

function HorizontalRow({ className, style }) {
	return (
		<Container className={className} style={style}>
			<hr className="w-full"/>
		</Container>
	);
}
export default HorizontalRow;
