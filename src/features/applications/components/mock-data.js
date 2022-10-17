import { CalendarDays, CheckCircle, MapPin } from "lucide-react";

const companyBadges = ["HTML", "CSS", "JS", "NODE", "REACT"];

const applications = [
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2022-11 to 2023-05" },
			{ icon: <MapPin size="20" />, children: "Gävleborg" },
			{ icon: <CheckCircle size="20" />, children: "Remote" },
		],
		badges: ["HTML", "CSS", "JS", "REACT"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2022-12 to 2023-06" },
			{ icon: <MapPin size="20" />, children: "Stockholm" },
			{ icon: <CheckCircle size="20" />, children: "Hybrid" },
		],
		badges: ["HTML", "CSS"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2023-01 to 2023-06" },
			{ icon: <MapPin size="20" />, children: "Göteborg" },
			{ icon: <CheckCircle size="20" />, children: "Hybrid" },
		],
		badges: ["HTML", "CSS", "JS", "NODE", "REACT"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2023-02 to 2023-08" },
			{ icon: <MapPin size="20" />, children: "Malmö" },
			{ icon: <CheckCircle size="20" />, children: "In-Office" },
		],
		badges: ["JS", "NODE", "REACT"],
	},
];

export { applications, companyBadges };
