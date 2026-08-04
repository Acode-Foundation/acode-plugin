declare namespace Acode {
	interface Terminal {
		create(options: TerminalOptions): Promise<TerminalInstance>;

		createLocal(options: TerminalOptions): Promise<TerminalInstance>;

		createServer(options: TerminalOptions): Promise<TerminalInstance>;

		get(id: string): TerminalInstance | null;

		getAll(): Map<string, TerminalInstance>;

		write(id: string, data: string): void;

		clear(id: string): void;

		close(id: string): void;

		moreOptions: TerminalTouchSelectionMoreOptionsApi;

		touchSelection: {
			moreOptions: TerminalTouchSelectionMoreOptionsApi;
		};

		themes: {
			register(name: string, theme: Xterm.ITheme, pluginId: string): boolean;

			unregister(name: string, pluginId: string): boolean;

			get(name: string): Xterm.ITheme;

			getAll(): Record<string, Xterm.ITheme>;

			getNames(): string[];

			createVariant(baseName: string, overrides: Xterm.ITheme): Xterm.ITheme;
		};
	}

	interface TerminalOptions
		extends Xterm.ITerminalOptions,
			Xterm.ITerminalInitOnlyOptions {
		name?: string;
		serverMode?: boolean;
		port?: number;
	}

	interface TerminalInstance {
		id: string;
		name: string;
		component: unknown;
		file: EditorFile;
		container: HTMLDivElement;
	}

	interface TerminalTouchSelectionMoreOptionContext {
		touchSelection: unknown;
		terminal?: unknown;
		selection?: string;
		[key: string]: unknown;
	}

	interface TerminalTouchSelectionMoreOption {
		id?: string;
		label?:
			| string
			| ((context: TerminalTouchSelectionMoreOptionContext) => string);
		text?: string;
		title?: string;
		icon?: string;
		enabled?:
			| boolean
			| ((context: TerminalTouchSelectionMoreOptionContext) => boolean);
		action?: (
			context: TerminalTouchSelectionMoreOptionContext,
		) => void | Promise<void>;
		onselect?: (
			context: TerminalTouchSelectionMoreOptionContext,
		) => void | Promise<void>;
		onclick?: (
			context: TerminalTouchSelectionMoreOptionContext,
		) => void | Promise<void>;
	}

	interface TerminalRegisteredTouchSelectionMoreOption {
		id: string;
		label:
			| string
			| ((context: TerminalTouchSelectionMoreOptionContext) => string);
		icon: string | null;
		enabled?:
			| boolean
			| ((context: TerminalTouchSelectionMoreOptionContext) => boolean);
		action: (
			context: TerminalTouchSelectionMoreOptionContext,
		) => void | Promise<void>;
	}

	interface TerminalTouchSelectionMoreOptionsApi {
		add(option: TerminalTouchSelectionMoreOption): string | null;
		remove(id: string): boolean;
		list(): TerminalRegisteredTouchSelectionMoreOption[];
	}
}
