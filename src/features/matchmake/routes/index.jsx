import React from "react";
import { CalendarDays, CheckCircle, Info, MapPin, Star } from "lucide-react";

import "./information.scss";
import InfoItem from "./components/info-item";
import Badge from "./components/badge";
import Review from "./components/review";

const index = () => {
	return (
		<main className="padding-2">
			<div id="company-information" className="display-grid gap-2 color-bg padding-1 padding-top-2 padding-bottom-2 radius-20 shadow">
				{/* Rating and info */}
				<div className="topinfo">
					<div className="display-flex">
						<Star fill="yellow" />
						<Star fill="yellow" />
						<Star fill="yellow" />
						<Star fill="yellow" />
						<Star fill="yellow" />
					</div>
					<div>
						<Info className="info-icon" />
					</div>
				</div>
				{/* Info  */}
				<ul className="info text-white">
					<InfoItem icon={<CalendarDays />} text="2022-11 to 2023-06" />
					<InfoItem icon={<MapPin />} text="Gävleborg" />
					<InfoItem icon={<CheckCircle />} text="Hybrid" />
					<InfoItem icon={<CheckCircle />} text="Remote" />
				</ul>
				<hr />
				{/* Badges  */}
				<ul className="display-flex center flex-wrap gap-1">
					<Badge text="node" />
					<Badge text="js" />
					<Badge text="ts" />
					<Badge text="html" />
					<Badge text="react" />
				</ul>
				<hr />
				{/* Statistics  */}
				<ul className="stats">
					<li className="stats-item">
						<h2>LIA-platser</h2>
						<div>
							2<span>st</span>
						</div>
					</li>
					<li className="stats-item">
						<h2>Antagningsgrad</h2>
						<div>
							75<span>%</span>
						</div>
					</li>
					<li className="stats-item">
						<h2>Responstid</h2>
						<div>
							3<span>h</span>
						</div>
					</li>
				</ul>
				<hr />
				{/* Reviews  */}
				<ul className="display-grid gap-2">
					<Review info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
					<Review info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
					<Review info="info" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto!" />
				</ul>
				{/* Navigation  */}
				<nav className="display-flex gap-2 space-evenly">
					<button className="button">Nästa</button>
					<button className="button">Nästa</button>
				</nav>
			</div>
		</main>
	);
};

export default index;
