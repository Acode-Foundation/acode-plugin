declare namespace Acode {
	interface Confirm {
		(titleText: string, message: string): Promise<boolean>;
	}
}
