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
		bio: (
			<>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus quaerat velit maiores perferendis blanditiis, voluptatem ducimus omnis ea natus totam libero consectetur repellat. Exercitationem a ea eum atque, minus accusantium, dignissimos iure amet vel ducimus maxime ipsum neque blanditiis eveniet debitis itaque magnam, dicta nisi aliquam officia sunt dolorem ut.</p>
			</>
		),
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2022-12 to 2023-06" },
			{ icon: <MapPin size="20" />, children: "Stockholm" },
			{ icon: <CheckCircle size="20" />, children: "Hybrid" },
		],
		badges: ["HTML", "CSS"],
		bio: (
			<>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus quaerat velit maiores perferendis blanditiis, voluptatem ducimus omnis ea natus totam libero consectetur repellat. Exercitationem a ea eum atque, minus accusantium, dignissimos iure amet vel ducimus maxime ipsum neque blanditiis eveniet debitis itaque magnam, dicta nisi aliquam officia sunt dolorem ut.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam iste nemo. Dignissimos, perferendis provident! Molestias numquam quae sint, impedit sunt aliquam esse ipsum odio iusto voluptates natus ab voluptatem.</p>
			</>
		),
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2023-01 to 2023-06" },
			{ icon: <MapPin size="20" />, children: "Göteborg" },
			{ icon: <CheckCircle size="20" />, children: "Hybrid" },
		],
		badges: ["HTML", "CSS", "JS", "NODE", "REACT"],
		bio: (
			<>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam iste nemo. Dignissimos, perferendis provident! Molestias numquam quae sint, impedit sunt aliquam esse ipsum odio iusto voluptates natus ab voluptatem.</p>
			</>
		),
	},
	{
		type: "Front-End Developer",
		info: [
			{ icon: <CalendarDays size="20" />, children: "2023-02 to 2023-08" },
			{ icon: <MapPin size="20" />, children: "Malmö" },
			{ icon: <CheckCircle size="20" />, children: "In-Office" },
		],
		badges: ["JS", "NODE", "REACT"],
		bio: (
			<>
				<p>Lorem ipsum dolor sit amet.</p>
			</>
		),
	},
];

export { applications, companyBadges };
