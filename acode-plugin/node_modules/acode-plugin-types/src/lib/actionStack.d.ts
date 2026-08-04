declare namespace Acode {
	interface ActionStack {
		readonly length: number;

		onCloseApp: () => void;

		push(action: Action): void;

		pop(repeat?: number): void;

		get(id: string): Action | undefined;

		remove(id: string): void;

		has(id: string): boolean;

		setMark(): void;

		clearFromMark(): void;
		freeze(): void;
		unfreeze(): void;
	}

	interface Action {
		id: string;

		action: () => void;
	}
}
