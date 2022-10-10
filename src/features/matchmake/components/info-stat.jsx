import Container from "./container";

function InfoStat({ title, value, unit, className }) {
	return (
		<Container type="li" display="flex" className={`info-stat flex-col justify-end items-center`}>
			<h2 className="text-sm text-center">{title}</h2>
			<Container type="article" display="flex" className={`justify-center items-center bg-white text-3xl w-75 rounded-pill ${className && className}`}>
				<div>
					{value}
					{unit && <span className="text-base">{unit}</span>}
				</div>
			</Container>
		</Container>
	);
}

export default InfoStat;