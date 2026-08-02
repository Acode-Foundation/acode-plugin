declare namespace Acode {
	interface Page {
		(
			title: string,
			options?: {
				lead?: HTMLElement;
				tail?: HTMLElement;
			},
		): WCPage;
	}
}
