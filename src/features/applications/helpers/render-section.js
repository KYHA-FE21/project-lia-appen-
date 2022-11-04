function renderSection(title, array, component) {
	return (
		<>
			<h1>
				{title} - {array.length}
			</h1>
			<div className="flex flex-wrap gap-3 justify-center">{array.map(component)}</div>
		</>
	);
}

export default renderSection;
