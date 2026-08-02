declare namespace Acode {
	interface Collapsible extends HTMLElement {
		$title: HTMLElement;
		$ul: HTMLUListElement;
		ontoggle: () => void;
		collapse: () => void;
		expand: () => void;
		collapsed: boolean;
		unclasped: boolean;
	}
}
