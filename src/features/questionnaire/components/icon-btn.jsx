const iconBtn = ({ icon, onClick, disabled }) => {
	return (
		<button
			className="questIconBtn shadow bg-primary mx-2 p-2"
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default iconBtn;
