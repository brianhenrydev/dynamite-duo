export const database = {
	heroes: [
		{
			id: 1,
			name: "Dynoguy",
			power: "Fire blasts",
		},
		{
			id: 2,
			name: "Hyperspeed",
			power: "Super speed",
		},
	],
	villains: [
		{
			id: 1,
			name: "Frostbite",
			power: "Ice manipulation",
			nemesis: "Dynoguy",
			weakness: "Heat",
		},
		{
			id: 2,
			name: "The Snare",
			power: "Time control",
			nemesis: "Hyperspeed",
			weakness: "Speed bursts",
		},
		{
			id: 3,
			name: "Dark Shadow",
			power: "Shadow manipulation",
			nemesis: "Dynoguy",
			weakness: "Light",
		},
		{
			id: 4,
			name: "Gravity Well",
			power: "Gravity manipulation",
			nemesis: "Hyperspeed",
			weakness: "Anti-gravity fields",
		},
	],
};

export const getVillains = () => {
	return database.villains.map((villain) => ({ ...villain }));
};
