import React from "react";
import { Check, Info, X } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import Badge from "../../../components/badge/badge";
import InfoText from "../../../components/info-text/info-text";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";

function Information({ data, setData, setSearchParams }) {
	return (
		<Container type="section" display="flex" className={"flex-col gap-4 p-3 rounded-md blur margin-auto overflow-hidden gradient shadow max-width"}>
			{!data && (
				<Heading
					{...{
						heading: "Laddar...",
						className: "justify-center",
					}}
				/>
			)}
			{data && (
				<>
					<Heading
						{...{
							heading: "Systemutvecklare",
							icon: <Info color="black" size="30" />,
						}}
					/>
					<Container type="ul" className="info-properties">
						<InfoText startTime="2022-11" endTime="2023-05" workModel="Remote" location="Gävleborg" />
					</Container>
					<hr />

					<Container type="ul" display="flex" className="flex-wrap justify-between">
						<Badge>Node</Badge>
						<Badge>JS</Badge>
						<Badge>CSS</Badge>
						<Badge>HTML</Badge>
						<Badge>React</Badge>
					</Container>
					<hr />
					<InfoStats />
					<hr />

					<Container type="nav" display="flex" className="gap-3 justify-evenly">
						<span
							className="w-100"
							onClick={() => {
								setData(false);
							}}
						>
							<SecondaryButton width="100%" logo={<X />} bg="#fd6d6d">
								Neka
							</SecondaryButton>
						</span>
						<span
							className="w-100"
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
				</>
			)}
		</Container>
	);
}

export default Information;
