declare namespace Acode {
	interface ColorPicker {
		(defaultColor: string, onhide?: () => void): Promise<string>;
	}
}
