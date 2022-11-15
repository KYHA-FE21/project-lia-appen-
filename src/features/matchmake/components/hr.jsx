import Container from "./container";

function HorizontalRow({ className, style }) {
	return (
		<Container className={className} style={{ borderColor: "var(--color-primary)", ...style }}>
			<hr className="w-full" style={{ borderColor: "inherit" }} />
		</Container>
	);
}
export default HorizontalRow;
