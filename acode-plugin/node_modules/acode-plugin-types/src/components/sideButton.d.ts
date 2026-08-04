declare namespace Acode {
	interface SideButton {
		show(): void;

		hide(): void;
	}

	type SideButtonConstructor = (options: SideButtonOptions) => SideButton;

	interface SideButtonOptions {
		text: string;

		icon?: string;

		onclick: (ev: MouseEvent) => void;

		backgroundColor?: string;

		textColor?: string;
	}
}
