import React from "react";
import "../styles/index.scss";
import Button from "../../../components/buttons";
import { useParams } from "react-router-dom";
import Modal from "../components/modal";

const Advertisement = () => {
	const { id } = useParams();
	const [advertisements, setAdvertisements] = React.useState();
	const [modalDisplay, setModalDisplay] = React.useState(true);

	React.useEffect(() => {
		// GET företags advertisements baserat på id
	}, []);

	return (
		<>
			<div className="flex justify-center py-8 px-4 advertisement-container">
				<div>
					<div className="header mb-10">
						<h1 className="text-2xl text-center mb-4">LIA-rekrytering</h1>
						<p className="text-center mb-6">
							Här kan du som företagsanvändare se dina befintliga rekryteringar, redigera dessa samt skapa nya.
						</p>
						<Button children="NY REKRYTERING" className="w-full" onClick={() => setModalDisplay(true)} />
					</div>
					<div className="content">
						<h2 className="text-xl text-center mb-4">Mina annonser</h2>
						{/* Rendera ut advertisement annons cards som finns för företag för respektive annons med map */}
						{/* Fundera ut hur edit funktion skulle kunna se ut */}
					</div>
				</div>
			</div>
			<Modal display={modalDisplay} setDisplay={setModalDisplay} />
		</>
	);
};

export default Advertisement;
