import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, CheckCircle2, X, XCircle } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";

function Verify({ data, setData, setSearchParams }) {
	const [verified, setVerified] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<>
			{!data && <Navigate to="/matchmake" />}
			{data && (
				<Container type="section" display="flex" className={"flex-col gap-4 p-3 rounded-md blur m-auto overflow-hidden gradient shadow max-width"}>
					{loading && (
						<Heading
							{...{
								heading: "Laddar...",
								className: "justify-center",
							}}
						/>
					)}
					{!loading && verified && (
						<>
							<Heading
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
							<Container type="nav" display="flex" className="gap-3 justify-evenly w-full h-10">
								<SecondaryButton
									width="100%"
									icon={<Check />}
									bgColor="green"
									className="text-white w-full"
									fontSize="0.75rem"
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
							<p>Är du säker på att du vill skicka dina svar och få en chans att ansöka? </p>
							<Container type="nav" display="flex" className="gap-3 justify-evenly w-full h-10">
								<SecondaryButton
									width="100%"
									icon={<X />}
									bgColor="red"
									className="text-white"
									fontSize="0.75rem"
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
									width="100%"
									icon={<Check />}
									bgColor="green"
									className="text-white"
									fontSize="0.75rem"
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
