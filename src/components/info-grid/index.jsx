import translate from "../../translate";
import "./index.scss";

function InfoGrid({
	entries = [],
	width,
	fontSize,
	color = "black",
	className = "",
}) {
	return (
		<div
			className={`info-container text-${color} ${className}`}
			style={{
				width: width,
				fontSize: fontSize,
			}}
		>
			{entries.map((entry, index) => (
				<InfoGridEntry key={index + entry.children} icon={entry.icon}>
					{translate(entry.children, true)}
				</InfoGridEntry>
			))}
		</div>
	);
}

export function InfoGridEntry({ icon, children }) {
	return (
		<div className="flex items-center gap-2">
			<span>{icon}</span>
			{children}
		</div>
	);
}

export default InfoGrid;
