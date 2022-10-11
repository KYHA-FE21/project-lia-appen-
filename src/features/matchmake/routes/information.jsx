import React from "react";
import { CalendarDays, Check, CheckCircle, Info, MapPin, X } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import InfoGrid from "../../../components/info-grid/";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";
import generateBadges from "../../../components/badge/generate-badges";

function Information({ data, setData, setSearchParams }) {
	return (
		<Container type="section" display="flex" className={"flex-col gap-4 p-3 rounded-md blur m-auto overflow-hidden gradient shadow max-width"}>
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
					<Container type="article">
						<InfoGrid
							fontSize={"0.75rem"}
							entries={[
								{ icon: <CalendarDays size="20" />, children: "2022-11 till 2023-05" },
								{ icon: <MapPin size="20" />, children: "Gävleborg" },
								{ icon: <CheckCircle size="20" />, children: "Remote" },
								{ icon: <CheckCircle size="20" />, children: "Hybrid" },
							]}
						/>
					</Container>
					<hr />

					<Container type="ul" display="flex" className="flex-wrap justify-center gap-2 text-white">
						{generateBadges(["JS", "TS", "HTML", "CSS", "REACT"], ["JS", "HTML", "CSS"])}
					</Container>
					<hr />
					<InfoStats />
					<hr />

					<Container type="nav" display="flex" className="gap-3 justify-evenly w-full h-10">
						<SecondaryButton
							icon={<X />}
							bgColor="red"
							className="text-white w-full"
							fontSize="0.75rem"
							onClick={() => {
								setData(false);
							}}
						>
							Neka
						</SecondaryButton>
						<SecondaryButton
							icon={<Check />}
							bgColor="green"
							className="text-white w-full"
							fontSize="0.75rem"
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("action", "questions");
									prev.set("question", "0");
									return prev;
								});
							}}
						>
							Gör test
						</SecondaryButton>
					</Container>
				</>
			)}
		</Container>
	);
}

export default Information;
