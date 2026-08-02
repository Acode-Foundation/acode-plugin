declare namespace Acode {
	interface Alert {
		(titleText: string, message: string, onhide?: () => void): void;
	}
}
