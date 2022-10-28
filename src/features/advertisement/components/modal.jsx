import React from "react";
import InputField, { InputLabel } from "../../../components/input-field";
import Button from "../../../components/buttons";
import Select from "./option";
import Badges from "../../../components/badge";
import { User, MapPin, CalendarDays, Wrench, Globe2, Users, Plus, X } from "lucide-react";

const Modal = ({ userId, display, setDisplay, patchData, postAdvertisement, patchAttributes, loading }) => {
	const [profession, setProfession] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [period, setPeriod] = React.useState(["", ""]);
	const [badge, setBadge] = React.useState("");
	const [badges, setBadges] = React.useState([]);
	const [workType, setWorkType] = React.useState("");
	const [openings, setOpenings] = React.useState(0);

	const setStates = (profession = "", location = "", period = ["", ""], badges = [], workType = "", openings = 0) => {
		setProfession(profession);
		setLocation(location);
		setPeriod(period);
		setBadges(badges);
		setWorkType(workType);
		setOpenings(openings);
	};

	React.useEffect(() => {
		if (!patchData) return setStates();
		const { attribute } = patchData;
		setStates(
			attribute.profession,
			attribute.location,
			attribute.period,
			attribute.badges,
			attribute.work_type,
			attribute.openings
		);
	}, [patchData]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			profession,
			location,
			period,
			badges,
			work_type: workType,
			openings,
			type: "advertisement",
		};
		if (patchData) {
			patchAttributes(patchData.attribute.id, userId, data);
		} else {
			data.is_active = true;
			data.decline_rate = "0.0";
			data.response_time = "0.0";
			postAdvertisement(userId, data);
		}
		setStates();
	};

	return (
		<div className={`advertisement-modal-container ${display ? "flex" : "hidden"}`}>
			<div className="content bg-white my-6 rounded-md p-8">
				<div className="exitIcon" onClick={() => setDisplay(false)}>
					<X />
				</div>
				<h1 className="text-xl text-center">Skapa/Redigera Annons</h1>
				<form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
					<div>
						<div className="mt-8">
							<InputLabel children="Yrke" />
							<InputField
								required
								icon={<User size={22} className="text-grey" />}
								placeholder="Systemutvecklare"
								value={profession}
								handleChange={(e) => setProfession(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Plats" />
							<InputField
								required
								placeholder="Örebro"
								icon={<MapPin size={22} className="text-grey" />}
								value={location}
								handleChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Period" />
							<div className="location-contaier gap-3">
								<InputField
									required
									type="date"
									icon={<CalendarDays size={22} className="text-grey" />}
									className={`${!period[0] ? "text-grey" : "text-black"}`}
									value={period[0]}
									handleChange={(e) => setPeriod([e.target.value, period[1]])}
								/>
								<InputField
									required
									type="date"
									className={`${!period[1] ? "text-grey" : "text-black"}`}
									value={period[1]}
									handleChange={(e) => setPeriod([period[0], e.target.value])}
								/>
							</div>
						</div>
						<div className="mt-8">
							<InputLabel children="Kunskaper" />
							<div className="flex">
								<InputField
									placeholder="Typescript"
									icon={<Wrench size={22} className="text-grey" />}
									value={badge}
									handleChange={(e) => setBadge(e.target.value)}
								/>
								<Button
									onClick={() => {
										if (badges.length === 5) return;
										setBadges([...badges, badge]);
										setBadge("");
									}}
									type="button"
									children={<Plus size={20} className="text-white" />}
									className="ml-2 mt-3"
								/>
							</div>
							<div className={`flex flex-wrap justify-center ${badges.length && "mt-3"}`}>
								{badges.map((item, i) => (
									<div key={item + i} onClick={() => setBadges(badges.filter((badge) => badge !== item))}>
										<Badges children={item} className="text-white m-2 adv-badges" />
									</div>
								))}
							</div>
						</div>
						<div className={`${badges.length ? "mt-4" : "mt-8"} `}>
							<InputLabel children="Arbetsform" />
							<Select
								required
								icon={<Globe2 size={22} className="text-grey" />}
								value={workType}
								handleChange={(e) => setWorkType(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Antal" />
							<InputField
								required
								placeholder="0"
								type="number"
								icon={<Users size={22} className="text-grey" />}
								value={openings}
								handleChange={(e) => setOpenings(e.target.value)}
							/>
						</div>
					</div>
					<Button className="w-full mt-8" children={loading ? "Loading..." : patchData ? "Updatera" : "Skapa annons"} />
				</form>
			</div>
		</div>
	);
};

export default Modal;
