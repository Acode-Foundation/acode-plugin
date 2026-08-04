declare namespace Acode {
	interface Themes {
		add(theme: ThemeBuilder): void;

		get(name: string): ThemeBuilder | undefined;

		update(theme: ThemeBuilder): void;

		list(): string[];

		apply(id: string): void;
	}
}
