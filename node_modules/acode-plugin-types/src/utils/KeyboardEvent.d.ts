declare namespace Acode {
	interface CreateKeyboardEvent {
		(
			type: "keydown" | "keyup",
			options: {
				[K in keyof KeyboardEvent]?: KeyboardEvent[K];
			},
		): void;
	}
}
