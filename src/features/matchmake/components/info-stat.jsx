function InfoStat({ title, value, unit, className = "" }) {
	return (
		<li className="info-stat flex flex-col justify-end items-center">
			<h2 className="text-tiny text-center">{title}</h2>
			<article className={`flex justify-center items-center bg-primary text-3xl text-white w-3/4 rounded-pill ${className}`}>
				<div>
					{value}
					{unit && <span className="text-base">{unit}</span>}
				</div>
			</article>
		</li>
	);
}

export default InfoStat;
