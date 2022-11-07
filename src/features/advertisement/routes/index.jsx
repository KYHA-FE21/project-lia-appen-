import React from "react";
import "../styles/index.scss";
import Modal from "../components/modal";
import useAdvertisementController from "../api/adv-controller";
import AuthContext from "../../../context";
import AdvCard from "../components/adv-card";
import Button from "../../../components/buttons";

const Advertisement = () => {
	const { data, loading, error, getAdvertisements, postAdvertisement, patchAttributes, removeAdvertisements } =
		useAdvertisementController();
	const { user } = React.useContext(AuthContext);
	const [modalDisplay, setModalDisplay] = React.useState(true);
	const [patchData, setPatchData] = React.useState(null);

	React.useEffect(() => {
		console.log(user.data.id);
		getAdvertisements(user.data.id);
	}, []);

	React.useEffect(() => {
		if (loading) return;
		setModalDisplay(false);
	}, [loading]);

	return (
		<>
			<div className="flex justify-center py-8 px-4 adver-container">
				<div>
					<div className="flex justify-center">
						<div className="header mb-14">
							<h1 className="text-2xl text-center mb-4">LIA-annonser</h1>
							<p className="text-center mb-6">
								Här kan du som företagsanvändare se dina befintliga annonser, redigera dessa samt skapa nya.
							</p>
							<Button
								className="w-full"
								onClick={() => {
									setPatchData(null);
									setModalDisplay(true);
								}}
							>
								NY REKRYTERING
							</Button>
						</div>
					</div>
					<div className="content">
						<h2 className="text-xl text-center mb-4">Mina annonser</h2>
						{!error && (
							<div className="flex flex-wrap justify-center gap-6">
								{data.map((add) => (
									<AdvCard key={add.id} add={add}>
										<Button
											className="w-full"
											onClick={() => {
												setPatchData(add);
												setModalDisplay(true);
											}}
										>
											Editera
										</Button>
									</AdvCard>
								))}
							</div>
						)}
						{error && <p>{error.message}</p>}
					</div>
				</div>
			</div>
			<Modal
				userId={user.data.id}
				display={modalDisplay}
				setDisplay={setModalDisplay}
				patchData={patchData}
				postAdvertisement={postAdvertisement}
				patchAttributes={patchAttributes}
				removeAdvertisements={removeAdvertisements}
			/>
		</>
	);
};

export default Advertisement;
