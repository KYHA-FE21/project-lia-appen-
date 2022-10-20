import { useState } from "react";
import { Check, Rocket, X, XCircle } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Card, { CardButtons } from "../../../components/card";
import LoadingCard from "../components/loading-card";

function Verify({ questionnaire, answers, setAction, getNew, setQuestion }) {
	const [verified, setVerified] = useState(false);
	const [loading, setLoading] = useState(false);

	function handleSubmit() {
		setLoading(true);
		setVerified(true);
		setQuestion(0);
		setTimeout(() => {
			setLoading(false);
		}, 1_000);
	}

	return (
		<>
			{loading && <LoadingCard />}
			{!loading && (
				<Card className="matchmake-cardfix mx-auto max-w-screen-sm matchmake-min-height">
					{verified && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Skickat",
									icon: <Rocket color="white" size="30" className="cursor-pointer" onClick={getNew} />,
								}}
							></Heading>
							<Container type="p" className="px-3 text-center text-white">
								Tryck på tillbaks för att få ett se ett nytt kort.
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={getNew}>
									Tillbaks
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{!verified && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Bekräfta",
									icon: <XCircle color="white" size="30" style={{ cursor: "pointer" }} onClick={getNew} />,
								}}
							/>
							<Container type="p" className="px-3 text-center text-white">
								{`Besvarade frågor ${Object.entries(answers).length}/${questionnaire.length}`}
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
										setQuestion((prev) => prev - 1);
										setAction("questions");
									}}
								>
									Tillbaks
								</SecondaryButton>
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={handleSubmit}>
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
