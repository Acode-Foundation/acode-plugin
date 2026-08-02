declare namespace Acode {
	interface ContextMenuConstructor {
		(content: string, options?: ContextMenuOptions): ContextMenu;
		(options: ContextMenuOptions): ContextMenu;
	}

	interface ContextMenu {
		show(): void;

		hide(): void;

		destroy(): void;
	}

	interface ContextMenuOptions {
		left?: number;

		top?: number;

		bottom?: number;

		right?: number;

		transformOrigin?: string;

		toggler?: HTMLElement;

		onshow?: () => void;

		onhide?: () => void;

		items: [text: string, action: string][];

		onclick?: (ev: MouseEvent) => void;

		onselect?: (ev: Event) => void;

		innerHTML?: () => string;
	}
}
