declare namespace Acode {
	export interface Tutorial {
		(
			id: string,
			message: string | HTMLElement | ((hide: () => void) => void),
		): void;
	}
}
