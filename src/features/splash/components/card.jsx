function SplashCard ({className = "", style, children}) {
	return (
		<div className={`flex-1 flex flex-col gap-3 splash-card p-3 rounded-md ${className}`} style={style}>
			{children}
		</div>
	)
}

export default SplashCard
