import { Check, Frown, X, XCircle } from "lucide-react";

import Container from "../components/container";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons, CardHeader } from "../../../components/card";
import Loading from "../components/loading";
import useVerify from "../hooks/verify";
import Verified from "./verified";

function Verification({ user, advertisementData, answers, setAction, getNew, setQuestion }) {
	const { questionnaire } = advertisementData;
	const { loading, error, verified, verify } = useVerify();

	function handleSubmit() {
		verify(advertisementData, answers, user);
	}

	return (
		<>
			{loading && <Loading />}
			{!loading && error && <Container className="p-3">{error}</Container>}
			{!loading && !error && (
				<>
					{verified === true && <Verified advertisementData={advertisementData} user={user} getNew={getNew} />}
					{verified === false && (
						<>
							<CardHeader className="text-2xl text-white px-3">
								<h2>Tyvärr...</h2>
								<Frown color="white" size="30" className="cursor-pointer" onClick={getNew} />
							</CardHeader>
							<Container className="flex flex-col gap-3 px-3 text-center text-white">
								<p>Du klarade tyvärr inte provet denna gång.</p>
								<p>Men det kommer fler chanser!</p>
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={getNew}>
									Nytt test
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{verified === null && (
						<>
							<CardHeader className="text-2xl text-white px-3">
								<h2>Bekräfta</h2>
								<XCircle color="white" size="30" style={{ cursor: "pointer" }} onClick={getNew} />
							</CardHeader>
							<Container type="p" className="px-3 text-center text-white">
								{`Besvarade frågor ${Object.entries(answers).length}/${questionnaire.length}`}
							</Container>
							<Container type="p" className="px-3 text-white">
								Är du säker på att du vill skicka dina svar?
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
				</>
			)}
		</>
	);
}

export default Verification;
