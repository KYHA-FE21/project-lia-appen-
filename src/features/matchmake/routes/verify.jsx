import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, X, XCircle } from "lucide-react";

import "./verify.scss";

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
				<Container type="section" id="matchmake-verify" className={"card gradient shadow"}>
					{loading && (
						<Heading
							props={{
								heading: "Laddar...",
								style: {
									justifyContent: "center",
								},
							}}
						/>
					)}
					{!loading && verified && (
						<>
							<Heading
								props={{
									heading: "Skickat",
									subheading: "Tryck på tillbaks för att få ett se ett nytt kort.",
									icon: <Check color="black" size="30" />,
								}}
							></Heading>
							<Container type="nav" className="verify-nav">
								<span
									style={{ width: "100%" }}
									onClick={() => {
										setData(false);
									}}
								>
									<SecondaryButton width="100%" logo={<Check />} bg="#32ba78">
										Tillbaks
									</SecondaryButton>
								</span>
							</Container>
						</>
					)}
					{!loading && !verified && (
						<>
							<Heading
								props={{
									heading: "Bekräfta",
									subheading: `Besvarade frågor ${data.answers.length}/${data.questions.length}`,
									icon: (
										<XCircle
											color="black"
											size="30"
											onClick={() => {
												setData(false);
											}}
										/>
									),
								}}
							/>
							<p>Är du säker på att du vill skicka dina svar och få en chans att ansöka? </p>
							<Container type="nav" className="nav">
								<span
									style={{ width: "100%" }}
									onClick={() => {
										setSearchParams((prev) => {
											prev.set("action", "questions");
											const question = parseInt(prev.get("question"));
											prev.set("question", question - 1);
											return prev;
										});
									}}
								>
									<SecondaryButton width="100%" logo={<X />} bg="#fd6d6d">
										Tillbaks
									</SecondaryButton>
								</span>
								<span
									style={{ width: "100%" }}
									onClick={() => {
										setLoading(true);
										setVerified(true);
										setTimeout(() => {
											setLoading(false);
										}, 1_000);
									}}
								>
									<SecondaryButton width="100%" logo={<Check />} bg="#32ba78">
										Skicka in
									</SecondaryButton>
								</span>
							</Container>
						</>
					)}
				</Container>
			)}
		</>
	);
}

export default Verify;
