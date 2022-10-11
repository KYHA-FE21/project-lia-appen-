import React from "react";
import { CalendarDays, Check, CheckCircle, Info, MapPin, X } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import InfoGrid from "../../../components/info-grid/";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";
import generateBadges from "../../../components/badge/generate-badges";
import HorizontalRow from "../components/hr";
import Loading from "../components/loading";

function Information({ data, setData, setSearchParams }) {
	return (
		<Container type="section" display="flex" className="flex-col py-3 gap-3 rounded-md blur mx-auto overflow-hidden gradient shadow w-full max-width" style={{ height: "max-content" }}>
			{!data && (
				<>
					<Heading
						className="px-3"
						{...{
							heading: "Laddar...",
							className: "justify-center",
						}}
					/>
					<Loading />
				</>
			)}
			{data && (
				<>
					<Heading
						className="px-3"
						{...{
							heading: "Systemutvecklare",
							icon: <Info color="black" size="30" />,
						}}
					/>
					<Container className="px-3" type="article">
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
					<HorizontalRow className="px-3" />
					<Container type="ul" display="flex" className="px-3 flex-wrap justify-center gap-2 text-white">
						{generateBadges(["JS", "TS", "HTML", "CSS", "REACT"], ["JS", "HTML", "CSS"])}
					</Container>
					<HorizontalRow className="px-3" />
					<InfoStats className="px-3" />
					<HorizontalRow className="px-3" />
					<Container type="nav" display="flex" className="px-3 gap-3 justify-evenly w-full h-10 mx-auto">
						<SecondaryButton
							icon={<X />}
							bgColor="red"
							className="text-white w-full text-sm"
							onClick={() => {
								setData(false);
							}}
						>
							Neka
						</SecondaryButton>
						<SecondaryButton
							icon={<Check />}
							bgColor="green"
							className="text-white w-full text-sm"
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
