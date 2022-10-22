import Container from "./container";

function HorizontalRow({ className, style }) {
	return (
		<Container className={className} style={{ borderColor: "#4d243d", ...style }}>
			<hr className="w-full" style={{ borderColor: "inherit" }} />
		</Container>
	);
}
export default HorizontalRow;
