import type { Extension } from "@codemirror/state";

declare global {
	namespace Acode {
		type EditorLanguageLoader = () => MaybePromise<
			Extension | readonly Extension[]
		>;

		interface EditorLanguageOptions {
			aliases?: string[];
			filenameMatchers?: RegExp[];
		}

		interface EditorLanguageMode {
			extensions: string;
			caption: string;
			name: string;
			mode: string;
			aliases: string[];
			extRe: RegExp | null;
			filenameMatchers: RegExp[];
			languageExtension: EditorLanguageLoader | null;
			supportsFile(filename: string): boolean;
			getLanguageExtension(): MaybePromise<
				Extension | readonly Extension[]
			> | null;
		}

		interface EditorLanguages {
			register(
				name: string,
				extensions: string | readonly string[],
				caption?: string,
				loader?: EditorLanguageLoader,
			): void;
			unregister(name: string): void;
			add(
				name: string,
				extensions: string | readonly string[],
				caption?: string,
				loader?: EditorLanguageLoader,
			): void;
			remove(name: string): void;
			list(): EditorLanguageMode[];
			listByName(): Record<string, EditorLanguageMode>;
			get(name: string): EditorLanguageMode | null;
			getForPath(path: string): EditorLanguageMode;
		}
	}
}
