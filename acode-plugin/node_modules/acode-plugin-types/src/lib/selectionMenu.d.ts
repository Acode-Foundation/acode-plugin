declare namespace Acode {
	interface SelectionMenu {
		add(
			onclick: (ev?: MouseEvent) => void,
			text: string,
			mode: "selected" | "all",
			readOnly?: boolean,
		): void;
	}
}
