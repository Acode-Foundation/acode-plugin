declare namespace Acode {
	interface WCPage extends HTMLElement {
		handler: PageHandler;
		onhide?: (this: WCPage) => void;
		onconnect?: (this: WCPage) => void;
		ondisconnect?: (this: WCPage) => void;
		onwillconnect?: (this: WCPage) => void;
		onwilldisconnect?: (this: WCPage) => void;
		appendBody(...elements: HTMLElement[]): void;
		appendOuter(...elements: HTMLElement[]): void;
		connectedCallback(): void;
		disconnectedCallback(): void;
		on(event: "hide" | "show", cb: (this: WCPage) => void): void;
		off(event: "hide" | "show", cb: (this: WCPage) => void): void;
		settitle(title: string): void;
		show(): void;
		hide(): string;
		body: HTMLElement;
		innerHTML: string;
		textContent: string;
		lead: HTMLElement;
		header: HTMLElement;
		initializeIfNotAlreadyInitialized(): void;
	}

	interface PageHandler {
		$el: HTMLElement;
		$replacement: HTMLElement;
		onRestore?: () => void;
		onReplace?: () => void;
		replaceEl(): void;
		restoreEl(): void;
		onhide(): void;
		onshow(): void;
		remove(): void;
	}
}
