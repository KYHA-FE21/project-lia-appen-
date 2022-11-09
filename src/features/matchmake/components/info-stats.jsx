import "./info-stats.scss";

import InfoStat from "./info-stat";

function InfoStats({ statistics, className = "" }) {
	const { openings, decline_rate, response_time } = statistics;

	const declineRate = decline_rate * 100;
	const { time, unit } = calculateResponseTime(response_time);

	function calculateResponseTime(response_time) {
		let time, unit;
		if (response_time < 60) {
			time = response_time;
			unit = "m";
		} else {
			time = response_time / 60;
			unit = "h";
			if (time > 24) {
				time /= 24;
				unit = "d";
			}
			if (time > 365) {
				time /= 365;
				unit = "y";
			}
		}
		time = Math.floor(time);
		return { time, unit };
	}

	return (
		<ul className={`flex info-stats justify-center ${className}`}>
			<InfoStat title="LIA-platser" value={openings} unit="st" />
			<InfoStat title="Antagningsgrad" value={declineRate} unit="%" className="w-full" />
			<InfoStat title="Responstid" value={time} unit={unit} />
		</ul>
	);
}

export default InfoStats;
