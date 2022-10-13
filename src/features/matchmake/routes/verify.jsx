import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, Hourglass, Rocket, X, XCircle } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Loading from "../components/loading";
import Card, { CardButtons } from "../../../components/card";

function Verify({ data, setData, setSearchParams }) {
	const [verified, setVerified] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<>
			{!data && <Navigate to="/matchmake" />}
			{data && (
				<Card className="cardfix mx-auto max-w-screen-sm min-height">
					{loading && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Laddar...",
									icon: <Hourglass color="white" size="30" />,
								}}
							/>
							<Loading color="white" size="80%" />
						</>
					)}
					{!loading && verified && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Skickat",
									icon: (
										<Rocket
											color="white"
											size="30"
											className="cursor-pointer"
											onClick={() => {
												setData(false);
											}}
										/>
									),
								}}
							></Heading>
							<Container type="p" className="px-3 text-center text-white">
								Tryck på tillbaks för att få ett se ett nytt kort.
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton
									icon={<Check color="white" />}
									bgColor="green"
									className="text-white w-full text-sm"
									onClick={() => {
										setData(false);
									}}
								>
									Tillbaks
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{!loading && !verified && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Bekräfta",
									icon: (
										<XCircle
											color="white"
											size="30"
											style={{ cursor: "pointer" }}
											onClick={() => {
												setData(false);
											}}
										/>
									),
								}}
							/>
							<Container type="p" className="px-3 text-center text-white">
								{`Besvarade frågor ${Object.entries(data.answers).length}/${data.questions.length}`}
							</Container>
							<Container type="p" className="px-3 text-white">
								Är du säker på att du vill skicka dina svar och få en chans att ansöka?
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton
									icon={<X color="white" />}
									bgColor="red"
									className="text-white w-full text-sm"
									onClick={() => {
										setSearchParams((prev) => {
											prev.set("action", "questions");
											const question = parseInt(prev.get("question"));
											prev.set("question", question - 1);
											return prev;
										});
									}}
								>
									Tillbaks
								</SecondaryButton>
								<SecondaryButton
									icon={<Check color="white" />}
									bgColor="green"
									className="text-white w-full text-sm"
									onClick={() => {
										setLoading(true);
										setVerified(true);
										setTimeout(() => {
											setLoading(false);
										}, 1_000);
									}}
								>
									Skicka in
								</SecondaryButton>
							</CardButtons>
						</>
					)}
				</Card>
			)}
		</>
	);
}

export default Verify;
