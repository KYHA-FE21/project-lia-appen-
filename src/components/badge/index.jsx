const Badge = ({ children, disabled = false, className = "" }) => {
	const opacity = disabled ? "opacity-5" : "opacity-10";
	return (
		<div className={`flex justify-center items-center text-tiny rounded-pill py-1 shadow px-2 bg-primary ${opacity} ${className}`}>
			<span className="mx-1">{children}</span>
		</div>
	);
};

export default Badge;
