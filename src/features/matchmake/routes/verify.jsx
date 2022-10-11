import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, CheckCircle2, X, XCircle } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Loading from "../components/loading";

function Verify({ data, setData, setSearchParams }) {
	const [verified, setVerified] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<>
			{!data && <Navigate to="/matchmake" />}
			{data && (
				<Container type="section" display="flex" className="flex-col py-3 gap-3 rounded-md blur mx-auto overflow-hidden gradient shadow w-full max-width" style={{ height: "max-content" }}>
					{loading && (
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
					{!loading && verified && (
						<>
							<Heading
								className="px-3"
								{...{
									heading: "Skickat",
									subheading: "Tryck på tillbaks för att få ett se ett nytt kort.",
									icon: (
										<CheckCircle2
											color="black"
											size="30"
											style={{ cursor: "pointer" }}
											onClick={() => {
												setData(false);
											}}
										/>
									),
								}}
							></Heading>
							<Container type="nav" display="flex" className="px-3 gap-3 justify-evenly w-full h-10">
								<SecondaryButton
									icon={<Check />}
									bgColor="green"
									className="text-white w-full text-sm"
									onClick={() => {
										setData(false);
									}}
								>
									Tillbaks
								</SecondaryButton>
							</Container>
						</>
					)}
					{!loading && !verified && (
						<>
							<Heading
								className="px-3"
								{...{
									heading: "Bekräfta",
									subheading: `Besvarade frågor ${Object.entries(data.answers).length}/${data.questions.length}`,
									icon: (
										<XCircle
											color="black"
											size="30"
											style={{ cursor: "pointer" }}
											onClick={() => {
												setData(false);
											}}
										/>
									),
								}}
							/>
							<Container type="p" className="px-3">
								Är du säker på att du vill skicka dina svar och få en chans att ansöka?
							</Container>
							<Container type="nav" display="flex" className="px-3 gap-3 justify-evenly w-full h-10 mx-auto">
								<SecondaryButton
									icon={<X />}
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
									icon={<Check />}
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
							</Container>
						</>
					)}
				</Container>
			)}
		</>
	);
}

export default Verify;
