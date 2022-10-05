import React from "react";
import { CalendarDays, CheckCircle, Info, MapPin, Star } from "lucide-react";

import "./index.scss";
import Container from "../components/container";
import InfoProperty from "../components/info-property";
import InfoStat from "../components/info-stat";
import InfoReview from "../components/info-review";
import Badge from "../components/badge";

const index = () => {
	return (
		<Container id="matchmake-info">
			<Container className="info-header">
				<Container display="flex">
					<Star style={{ fill: "yellow" }} size="30" />
					<Star style={{ fill: "yellow" }} size="30" />
					<Star style={{ fill: "yellow" }} size="30" />
					<Star style={{ fill: "yellow" }} size="30" />
					<Star style={{ fill: "yellow" }} size="30" />
				</Container>
				<Container>
					<Info className="info-icon" style={{ color: "white" }} size="50" />
				</Container>
			</Container>
			<Container type="ul" className="info-properties">
				<InfoProperty icon={<CalendarDays />} text="2022-11 to 2023-06" />
				<InfoProperty icon={<MapPin />} text="Gävleborg" />
				<InfoProperty icon={<CheckCircle />} text="Hybrid" />
				<InfoProperty icon={<CheckCircle />} text="Remote" />
			</Container>
			<hr />
			<Container type="ul" className="info-badges">
				<Badge text="node" />
				<Badge text="js" />
				<Badge text="ts" />
				<Badge text="html" />
				<Badge text="react" />
			</Container>
			<hr />
			<Container type="ul" className="info-stats">
				<InfoStat title="LIA-platser" value="2" unit="st" />
				<InfoStat title="Antagningsgrad" value="75" unit="%" />
				<InfoStat title="Responstid" value="3" unit="h" />
			</Container>
			<hr />
			<Container type="ul" className="info-reviews">
				<InfoReview info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
				<InfoReview info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
				<InfoReview info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
			</Container>
			<Container type="nav" className="info-nav">
				<button className="button">Nästa</button>
				<button className="button">Nästa</button>
			</Container>
		</Container>
	);
};

export default index;
