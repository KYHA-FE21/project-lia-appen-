const Badge = ({ children, disabled = false, className = "", icon, ...restProps }) => {
	const opacity = disabled ? "opacity-5" : "opacity-10";
	return (
		<div
			className={`flex justify-center items-center text-tiny rounded-pill py-1 shadow px-2 bg-primary ${opacity} ${className}`}
			{...restProps}
		>
			<span className="mx-1">{children}</span>
			{icon}
		</div>
	);
};

export default Badge;
