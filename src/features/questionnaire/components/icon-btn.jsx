const IconBtn = ({ icon, onClick, disabled }) => {
	return (
		<button
			className="questIconBtn text-white shadow bg-primary mx-2 p-2 rounded-md"
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default IconBtn;
