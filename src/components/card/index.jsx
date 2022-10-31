import "./index.scss";

function Card({ id, className = "", children }) {
	return (
		<article className={`flex flex-col shadow blur card-bg rounded-lg overflow-hidden gap-5 p-3 ${className}`} id={id}>
			{children}
		</article>
	);
}

export function CardHeader({ className = "", children }) {
	return <div className={`flex justify-between items-center py-2 gap-2 ${className}`}>{children}</div>;
}

export function CardBadges({ className = "", children }) {
	return <div className={`flex flex-wrap justify-center text-white items-stretch gap-2 ${className}`}>{children}</div>;
}

export function CardButtons({ className = "", children }) {
	return <div className={`flex items-stretch gap-4 ${className}`}>{children}</div>;
}

export default Card;
