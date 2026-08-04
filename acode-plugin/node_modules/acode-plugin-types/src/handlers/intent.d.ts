declare namespace Acode {
	interface Intent {
		addHandler(handler: (event: IntentEvent) => void): void;

		removeHandler(handler: (event: IntentEvent) => void): void;
	}

	interface IntentEvent {
		module: string;

		action: string;

		value: string;

		preventDefault: () => void;

		stopPropagation: () => void;

		readonly defaultPrevented: boolean;

		readonly propagationStopped: boolean;
	}
}
