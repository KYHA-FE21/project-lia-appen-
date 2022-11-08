import { Check, Frown, X, XCircle } from "lucide-react";
import SecondaryButton from "../../../../components/buttons/secondary-button";
import { CardButtons, CardHeader } from "../../../../components/card";
import useVerify from "../../hooks/verify";
import Container from "../container";
import Loading from "../loading";
import Verified from "./verified";

function Verification({ user, advertisementData, answers, setAction, getNew, setQuestion, apply }) {
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
					{verified === true && <Verified getNew={getNew} apply={apply} />}
					{verified === false && (
						<>
							<CardHeader className="text-2xl px-3">
								<h2>Tyvärr...</h2>
								<Frown className="cursor-pointer" color="black" size="30" onClick={getNew} />
							</CardHeader>
							<Container className="flex flex-col gap-3 px-3 text-center ">
								<p>Du klarade tyvärr inte testet denna gång.</p>
								<p>Men det kommer fler chanser!</p>
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={getNew}>
									Ny annons
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{verified === null && (
						<>
							<CardHeader className="text-2xl px-3">
								<h2>Bekräfta</h2>
								<XCircle className="cursor-pointer" color="black" size="30" onClick={() => apply.deny()} />
							</CardHeader>
							<Container type="p" className="px-3 text-center ">
								{`Besvarade frågor ${Object.entries(answers).length}/${questionnaire.length}`}
							</Container>
							<Container type="p" className="px-3 ">
								Är du säker på att du vill skicka dina svar?
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton
									icon={<X color="white" />}
									bgColor="red"
									className="w-full text-sm"
									onClick={() => {
										setQuestion((prev) => prev - 1);
										setAction("questions");
									}}
								>
									Tillbaks
								</SecondaryButton>
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={handleSubmit}>
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
