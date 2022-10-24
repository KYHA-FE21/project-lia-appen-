import "./index.scss";

function Card({ id, className = "", children }) {
	return (
		<article className={`flex shadow card-bg rounded-lg overflow-hidden ${className}`} id={id}>
			<div className="flex flex-col blur overflow-hidden flex-1 gap-5 p-3 gradient">
				{children}
			</div>
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
