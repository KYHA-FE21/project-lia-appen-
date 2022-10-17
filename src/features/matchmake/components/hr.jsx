import Container from "./container";

function HorizontalRow({ className, style }) {
	return (
		<Container className={className} style={style}>
			<hr className="w-full" style={{borderColor:"#4d243d"}}/>
		</Container>
	);
}
export default HorizontalRow;
