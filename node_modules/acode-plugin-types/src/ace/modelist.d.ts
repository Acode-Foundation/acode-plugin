declare namespace Acode {
	interface AceModes {
		addMode(
			name: string,
			extensions: string | readonly string[],
			caption?: string,
			loader?: EditorLanguageLoader,
			options?: EditorLanguageOptions,
		): void;
		removeMode(name: string): void;
		getModeForPath(path: string): EditorLanguageMode;
		getModes(): EditorLanguageMode[];
		getModesByName(): Record<string, EditorLanguageMode>;
		getMode(name: string): EditorLanguageMode | null;
	}
}
