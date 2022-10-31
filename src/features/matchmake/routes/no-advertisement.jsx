import { Check, Slash } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons, CardHeader } from "../../../components/card";
import Container from "../components/container";

function NoAdvertisement({ getNew }) {
	return (
		<>
			<CardHeader className="text-2xl px-3">
				<h2 className="overflow-hidden white-space-nowrap text-overflow-ellipsis">Hoppsan!</h2>
				<Slash size="30" style={{ minWidth: "max-content" }} />
			</CardHeader>
			<Container className="flex flex-col gap-3 px-3 text-center ">
				<p>Det finns inga annonser tillgängliga för dig just nu.</p>
			</Container>
			<CardButtons className="px-3 text-white mt-auto">
				<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={getNew}>
					Försök igen
				</SecondaryButton>
			</CardButtons>
		</>
	);
}

export default NoAdvertisement;
