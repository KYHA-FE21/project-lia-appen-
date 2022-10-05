function InfoStat({ title, value, unit }) {
	return (
		<li className="info-stat">
			<h2>{title}</h2>
			<div>
				{value}
				<span>{unit}</span>
			</div>
		</li>
	);
}

export default InfoStat;
