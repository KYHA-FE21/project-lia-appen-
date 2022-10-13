import { CalendarDays, CheckCircle, MapPin } from "lucide-react";

const myBadges = ["HTML", "CSS", "JS", "NODE", "REACT"];

const applications = [
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" color="white" />, children: <span className="text-white">2022-11 to 2023-05</span> },
			{ icon: <MapPin size="20" color="white" />, children: <span className="text-white">Gävleborg</span> },
			{ icon: <CheckCircle size="20" color="white" />, children: <span className="text-white">Remote</span> },
			{ icon: <CheckCircle size="20" color="white" />, children: <span className="text-white">Hybrid</span> },
		],
		badges: ["HTML", "CSS", "JS", "REACT"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" color="white" />, children: <span className="text-white">2022-12 to 2023-06</span> },
			{ icon: <MapPin size="20" color="white" />, children: <span className="text-white">Stockholm</span> },
			{ icon: <CheckCircle size="20" color="white" />, children: <span className="text-white">Hybrid</span> },
		],
		badges: ["HTML", "CSS"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" color="white" />, children: <span className="text-white">2023-01 to 2023-06</span> },
			{ icon: <MapPin size="20" color="white" />, children: <span className="text-white">Göteborg</span> },
			{ icon: <CheckCircle size="20" color="white" />, children: <span className="text-white">Hybrid</span> },
		],
		badges: ["HTML", "CSS", "JS", "NODE", "REACT"],
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" color="white" />, children: <span className="text-white">2023-02 to 2023-08</span> },
			{ icon: <MapPin size="20" color="white" />, children: <span className="text-white">Malmö</span> },
			{ icon: <CheckCircle size="20" color="white" />, children: <span className="text-white">In-Office</span> },
		],
		badges: ["JS", "NODE", "REACT"],
	},
];

export { applications, myBadges };
