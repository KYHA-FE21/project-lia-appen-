function ApplicationSection({ title, children }) {
	return (
		<>
			<h1 className="text-xl text-center">
				{title}
			</h1>
			<div className="flex flex-wrap gap-3 justify-center">{children}</div>
		</>
	);
}

export default ApplicationSection;
