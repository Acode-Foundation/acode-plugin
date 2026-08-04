declare namespace Acode {
	interface DialogBoxConstructor {
		(
			titleText: string,
			html: string,
			hideButtonText: string,
			cancelButtonText: string,
		): DialogBox;
	}

	interface DialogBox {
		hide(): void;

		wait(time: number): DialogBox;

		onhide(onhide: () => void): DialogBox;

		onclick(onclick: (this: HTMLElement, ev: MouseEvent) => void): DialogBox;

		then(callback: (arg0: HTMLCollection) => void): DialogBox;

		ok(onOk: () => void): DialogBox;

		cancel(onCancel: () => void): DialogBox;
	}
}
