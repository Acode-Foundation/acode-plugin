declare namespace Acode {
	interface Fonts {
		add(name: string, css: string): void;

		addCustom: (name: string, css: string) => void;

		get(name: string): { name: string; css: string } | undefined;

		getNames(): string[];

		remove: (name: string) => boolean;

		has: (name: string) => boolean;

		setFont: (name: string) => Promise<void>;

		loadFont: (name: string) => Promise<string>;
	}
}
