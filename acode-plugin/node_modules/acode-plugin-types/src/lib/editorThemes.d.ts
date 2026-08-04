import type { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import type { Extension } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";
import type { tags } from "@lezer/highlight";

declare global {
	namespace Acode {
		interface EditorThemeConfig {
			[key: string]: unknown;
		}

		interface EditorThemeStyles {
			[selector: string]: Record<string, string | number | boolean>;
		}

		interface EditorThemeRegistration {
			id?: string;
			name?: string;
			caption?: string;
			label?: string;
			dark?: boolean;
			isDark?: boolean;
			getExtension?: () => MaybePromise<Extension | readonly Extension[]>;
			extensions?: Extension | readonly Extension[];
			extension?: Extension | readonly Extension[];
			theme?: Extension | readonly Extension[];
			config?: EditorThemeConfig;
		}

		interface EditorThemeSummary {
			id: string;
			caption?: string;
			dark?: boolean;
			config?: EditorThemeConfig;
		}

		interface EditorThemesHelpers {
			EditorView: typeof EditorView;
			HighlightStyle: typeof HighlightStyle;
			syntaxHighlighting: typeof syntaxHighlighting;
			tags: typeof tags;
		}

		interface EditorThemes {
			register(spec: EditorThemeRegistration): boolean | undefined;
			unregister(id: string): void;
			apply(id: string): void;
			list(): EditorThemeSummary[] | string[];
			get(id: string): EditorThemeRegistration | null | undefined;
			getConfig(id: string): EditorThemeConfig | null | undefined;
			createTheme(options: {
				styles?: EditorThemeStyles;
				dark?: boolean;
				highlightStyle?: Record<string, unknown> | HighlightStyle;
				extensions?: Extension | readonly Extension[];
			}): readonly Extension[];
			createHighlightStyle(
				spec: Record<string, unknown> | HighlightStyle,
			): HighlightStyle | null | unknown;
			cm: EditorThemesHelpers;
		}
	}
}
