function renderSection(title, array, component) {
	return (
		<>
			<h1 className="text-xl text-center">
				{title} - {array.length}
			</h1>
			<div className="flex flex-wrap gap-3 justify-center">{array.map(component)}</div>
		</>
	);
}

export default renderSection;
