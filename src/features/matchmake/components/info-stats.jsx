import "./info-stats.scss";

import Container from "./container";
import InfoStat from "./info-stat";

function InfoStats() {
	return (
		<Container type="ul" display="flex" className="info-stats justify-center">
			<InfoStat title="LIA-platser" value="2" unit="st" />
			<InfoStat title="Antagningsgrad" value="75" unit="%" className="w-full" />
			<InfoStat title="Responstid" value="3" unit="h" />
		</Container>
	);
}

export default InfoStats;
