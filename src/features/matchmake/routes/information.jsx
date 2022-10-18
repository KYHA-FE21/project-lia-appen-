import React from "react";
import { CalendarDays, Check, CheckCircle, Hourglass, Info, MapPin, X } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import InfoGrid from "../../../components/info-grid/";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";
import generateBadges from "../../../components/badge/generate-badges";
import HorizontalRow from "../components/hr";
import Loading from "../components/loading";
import Card, { CardBadges, CardButtons } from "../../../components/card";

function Information({ data, setData, setSearchParams }) {
	return (
			<Card className="matchmake-cardfix max-w-screen-sm matchmake-min-height h-max w-full">
				{!data && (
					<>
						<Heading
							className="text-2xl text-white px-3"
							{...{
								heading: "Laddar...",
								icon: <Hourglass color="white" size="30" />,
							}}
						/>
						<Loading color="white" className="h-15 w-15" />
					</>
				)}
				{data && (
					<>
						<Heading
							className="text-2xl text-white px-3"
							{...{
								heading: "Systemutvecklare",
								icon: <Info color="white" size="30" />,
							}}
						/>
						<Container className="px-3" type="article">
							<InfoGrid
								fontSize={"0.75rem"}
								color="white"
								entries={[
									{ icon: <CalendarDays size="20" />, children: <span className="font-bold">2022-11 till 2023-05</span> },
									{ icon: <MapPin size="20" />, children: <span className="font-bold">Gävleborg</span> },
									{ icon: <CheckCircle size="20" />, children: <span className="font-bold">Remote</span> },
									{ icon: <CheckCircle size="20" />, children: <span className="font-bold">Hybrid</span> },
								]}
							/>
						</Container>
						<HorizontalRow className="px-3 opacity-3" />
						<CardBadges className="matchmake-badgesfix">{generateBadges(["JS", "TS", "HTML", "CSS", "REACT"], ["JS", "HTML", "CSS"])}</CardBadges>
						<HorizontalRow className="px-3 opacity-3" />
						<InfoStats className="text-white" />
						<HorizontalRow className="px-3 opacity-3" />
						<CardButtons className="px-3 mt-auto">
							<SecondaryButton
								icon={<X color="white" />}
								bgColor="red"
								className="text-white w-full text-sm"
								onClick={() => {
									setData(false);
								}}
							>
								Neka
							</SecondaryButton>
							<SecondaryButton
								icon={<Check color="white" />}
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
						</CardButtons>
					</>
				)}
			</Card>
	);
}

export default Information;
