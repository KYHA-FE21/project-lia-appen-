function SplashCard ({className = "", children}) {
	return (
		<div className={`flex-1 flex flex-col gap-3 splash-card p-3 rounded-md ${className}`}>
			{children}
		</div>
	)
}

export default SplashCard
