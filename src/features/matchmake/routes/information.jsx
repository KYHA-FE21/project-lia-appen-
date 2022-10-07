import React from "react";
import { Check, Info, X } from "lucide-react";

import "./information.scss";

import Container from "../components/container";
import InfoStat from "../components/info-stat";
import Heading from "../components/heading";
import Badge from "../../../components/badge/badge";
import InfoText from "../../../components/info-text/info-text";
import SecondaryButton from "../../../components/buttons/secondary-button";

function Information({ data, setData, setSearchParams }) {
	if (!data)
		return (
			<Container type="section" id="matchmake-info" className={"card shadow"}>
				<Heading
					props={{
						heading: "Laddar...",
						style: { justifyContent: "center" },
					}}
				/>
			</Container>
		);
	else
		return (
			<Container type="section" id="matchmake-info" className={"card"}>
				<Heading
					props={{
						heading: "Systemutvecklare",
						icon: <Info color="black" size="30" />,
					}}
				/>
				<Container type="ul" className="info-properties">
					<InfoText startTime="2022-11" endTime="2023-05" workModel="Remote" location="Gävleborg" />
				</Container>
				<hr />
				
				<Container type="ul" className="info-badges">
					<Badge>Node</Badge>
					<Badge>JS</Badge>
					<Badge>CSS</Badge>
					<Badge>HTML</Badge>
					<Badge>React</Badge>
				</Container>
				<hr />
				<Container type="ul" className="info-stats">
					<InfoStat title="LIA-platser" value="2" unit="st" />
					<InfoStat title="Antagningsgrad" value="75" unit="%" />
					<InfoStat title="Responstid" value="3" unit="h" />
				</Container>
				<hr />

				<Container type="nav" className="nav">
					<span
						style={{ width: "100%" }}
						onClick={() => {
							setData(false);
						}}
					>
						<SecondaryButton width="100%" logo={<X />} bg="#fd6d6d">
							Neka
						</SecondaryButton>
					</span>
					<span
						style={{ width: "100%" }}
						onClick={() => {
							setSearchParams((prev) => {
								prev.set("action", "questions");
								prev.set("question", "0");
								return prev;
							});
						}}
					>
						<SecondaryButton width="100%" logo={<Check />} bg="#32ba78">
							Gör test
						</SecondaryButton>
					</span>
				</Container>
			</Container>
		);
}

export default Information;
