import React from "react";
import "../styles/index.scss";
import Button from "../../../components/buttons";
import { useParams } from "react-router-dom";
import Modal from "../components/modal";
import useAdvertisementController from "../api/adv-controller";

const Advertisement = () => {
	const { data, loading, error, getAdvertisements, postAdvertisement, patchAttributes } = useAdvertisementController();
	const { id } = useParams();
	const [modalDisplay, setModalDisplay] = React.useState(true);
	const [patchData, setPatchData] = React.useState(null);

	React.useEffect(() => {
		getAdvertisements(id);
	}, []);

	React.useEffect(() => {
		if (loading) return;
		setModalDisplay(false);
	}, [loading]);

	return (
		<>
			<div className="flex justify-center py-8 px-4 advertisement-container">
				<div>
					<div className="header mb-10">
						<h1 className="text-2xl text-center mb-4">LIA-rekrytering</h1>
						<p className="text-center mb-6">
							Här kan du som företagsanvändare se dina befintliga rekryteringar, redigera dessa samt skapa nya.
						</p>
						<Button
							children="NY REKRYTERING"
							className="w-full"
							onClick={() => {
								setPatchData(null);
								setModalDisplay(true);
							}}
						/>
					</div>
					<div className="content">
						<h2 className="text-xl text-center mb-4">Mina annonser</h2>
						{!error && (
							<div className="flex flex-wrap justify-center">
								{data.map((add) => (
									<div
										className="mr-4"
										key={add.id}
										onClick={() => {
											setPatchData(add);
											setModalDisplay(true);
										}}
									>
										{add.attribute.profession}
									</div>
								))}
							</div>
						)}
						{error && <p>{error.message}</p>}
					</div>
				</div>
			</div>
			<Modal
				userId={id}
				display={modalDisplay}
				setDisplay={setModalDisplay}
				patchData={patchData}
				postAdvertisement={postAdvertisement}
				patchAttributes={patchAttributes}
			/>
		</>
	);
};

export default Advertisement;
