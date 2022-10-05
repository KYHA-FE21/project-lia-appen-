function InfoStat({ title, value, unit }) {
	return (
		<li className="info-stat">
			<h2>{title}</h2>
			<article>
				{value}
				<span>{unit}</span>
			</article>
		</li>
	);
}

export default InfoStat;
