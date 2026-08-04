declare namespace Acode {
	interface Keyboard {
		(e: KeyboardEvent): void;
		on(eventName: "key", callback: (ev: KeyboardEvent) => void): void;
		on(eventName: KeyboardEventName, callback: () => void): void;

		off(eventName: "key", callback: (ev: KeyboardEvent) => void): void;
		off(eventName: KeyboardEventName, callback: () => void): void;
	}

	type KeyboardEventName =
		| "key"
		| "keyboardShow"
		| "keyboardHide"
		| "keyboardShowStart"
		| "keyboardHideStart";
}
