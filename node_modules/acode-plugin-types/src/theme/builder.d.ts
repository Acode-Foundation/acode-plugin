declare namespace Acode {
	export class ThemeBuilder {
		version: "free" | "paid";
		name: string;

		type: "dark" | "light";

		autoDarkened: boolean;

		preferredEditorTheme: string;

		preferredFont: string;

		constructor(
			name: string,
			type?: "dark" | "light",
			version?: "free" | "paid",
		);

		readonly id: string;

		popupBorderRadius: string;

		activeColor: string;

		activeIconColor: string;

		borderColor: string;

		boxShadowColor: string;

		buttonActiveColor: string;

		buttonBackgroundColor: string;

		buttonTextColor: string;

		errorTextColor: string;

		primaryColor: string;

		primaryTextColor: string;

		secondaryColor: string;

		secondaryTextColor: string;

		linkTextColor: string;

		scrollbarColor: string;

		popupBorderColor: string;

		popupIconColor: string;

		popupBackgroundColor: string;

		popupTextColor: string;

		popupActiveColor: string;

		dangerColor: string;

		fileTabWidth: string;

		activeTextColor: string;

		readonly css: string;

		toJSON(colorType: "rgba" | "hex" | "none"): Record<string, string>;

		toString(): string;

		darkenPrimaryColor(): void;

		static fromCSS(css: string): ThemeBuilder;

		static fromJSON(json: Record<string, string>): ThemeBuilder;
	}
}
