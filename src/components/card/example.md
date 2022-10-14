# Card Component

```jsx
<Card id="some-id-for-scrolling">
	<CardHeader>
		<h2>{title}</h2>
		<PrimaryButton onClick={readMoreButtonOnClick} logo={<Info size={16} />}>
			Läs Mer
		</PrimaryButton>
	</CardHeader>

	<CardBadges>
		<Badge>HTML</Badge>
		<Badge>JavaScript</Badge>
	</CardBadges>

	<InfoGrid entries={[{ icon: <Info />, children: "Text goes here" }]} />

	<CardButtons>
		<SecondaryButton
			icon={<X />}
			onClick={denyButtonOnClick}
			bgColor="red"
			className="flex-1"
		>
			Neka
		</SecondaryButton>
		<SecondaryButton
			icon={<Check />}
			onClick={acceptButtonOnClick}
			bgColor="green"
			className="flex-1"
		>
			Acceptera
		</SecondaryButton>
	</CardButtons>
</Card>
```
