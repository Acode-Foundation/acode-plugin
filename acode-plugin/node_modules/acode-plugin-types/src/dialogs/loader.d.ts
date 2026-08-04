declare namespace Acode {
	interface Loader {
		showTitleLoader(immortal?: boolean): void;

		removeTitleLoader(immortal?: boolean): void;

		create(
			titleText: string,
			message: string,
			cancel: {
				timeout: number;
				oncancel?: () => void;
				callback: () => void;
			},
		): void;

		destroy(): void;

		hide(): void;

		show(): void;
	}
}
