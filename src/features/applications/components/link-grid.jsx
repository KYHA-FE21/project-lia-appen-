import { Link } from "lucide-react";
import "./link-grid.scss";

function LinkGrid({ entries = [], fontSize, iconSize, color = "black", className = "" }) {
	return (
		<div
			className={`link-container grid row-gap-2 ${className}`}
			style={{
				color,
				fontSize,
			}}
		>
			{entries.map((entry, index) => (
				<LinkGridEntry key={index + entry} iconSize={iconSize} {...entry} />
			))}
		</div>
	);
}

export function LinkGridEntry({ url, title, iconSize }) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
			<Link size={iconSize} style={{ minWidth: iconSize, minHeight: iconSize }} />
			<span className="overflow-hidden text-overflow-ellipsis white-space-nowrap">{title}</span>
		</a>
	);
}

export default LinkGrid;
