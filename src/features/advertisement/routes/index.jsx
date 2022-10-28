import React from "react";
import "../styles/index.scss";
import Button from "../../../components/buttons";
import { useParams } from "react-router-dom";
import Modal from "../components/modal";
import useAdvertisementController from "../api/adv-controller";
import Card, { CardHeader, CardBadges, CardButtons } from "../../../components/card";
import InfoStats from "../../../components/info-stats/info-stats";
import Badges from "../../../components/badge";
import InfoGrid from "../../../components/info-grid";
import { CalendarDays, MapPin, CheckCircle } from "lucide-react";

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
					<div className="flex justify-center">
						<div className="header mb-14">
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
					</div>
					<div className="content">
						<h2 className="text-xl text-center mb-4">Mina annonser</h2>
						{!error && (
							<div className="flex flex-wrap justify-center gap-6">
								{data.map((add) => (
									<Card key={add.id}>
										<CardHeader className="text-2xl text-white px-3">
											<h2 className="">{add.attribute.profession}</h2>
										</CardHeader>
										<InfoGrid
											className="px-3"
											color="white"
											entries={[
												{
													icon: <CalendarDays size="20" />,
													children: (
														<span className="text-tiny">
															{add.attribute.period[0]} <br /> {add.attribute.period[1]}
														</span>
													),
												},
												{
													icon: <MapPin size="20" />,
													children: <span className="text-tiny">{add.attribute.location}</span>,
												},
												{
													icon: <CheckCircle size="20" />,
													children: <span className="text-tiny">{add.attribute.work_type}</span>,
												},
											]}
										/>
										<div className="divider" />
										<CardBadges>
											{add.attribute.badges.map((badge, i) => (
												<Badges key={badge + i} children={badge} className="text-white" />
											))}
										</CardBadges>
										<div className="divider" />
										<InfoStats
											statistics={{
												response_time: add.attribute.response_time,
												openings: add.attribute.openings,
												decline_rate: add.attribute.decline_rate,
											}}
										/>
										<div className="divider" />
										<CardButtons>
											<Button
												className="w-full"
												children="Editera"
												onClick={() => {
													setPatchData(add);
													setModalDisplay(true);
												}}
											/>
										</CardButtons>
									</Card>
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
