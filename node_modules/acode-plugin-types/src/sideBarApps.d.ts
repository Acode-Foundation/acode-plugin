declare namespace Acode {
	interface SidebarApps {
		add(
			icon: string,
			id: string,
			title: string,
			initFunction: (container: HTMLElement) => void,
			prepend?: boolean,
			onSelected?: (container: HTMLElement) => void,
		): void;

		get(id: string): HTMLElement | undefined;

		remove(id: string): void;
	}
}
