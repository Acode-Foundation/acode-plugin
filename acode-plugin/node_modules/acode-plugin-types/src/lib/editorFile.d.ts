declare namespace Acode {
	class EditorFile {
		hideQuickTools: boolean;

		stylesheets: string | string[];

		focusedBefore: boolean;

		focused: boolean;

		loaded: boolean;

		loading: boolean;

		deletedFile: boolean;

		session: Ace.EditSession;

		encoding: string;

		readOnly: boolean;

		markChanged: boolean;

		onsave?: (event: FileEvent) => void;
		onchange?: (event: FileEvent) => void;
		onfocus?: (event: FileEvent) => void;
		onblur?: (event: FileEvent) => void;
		onclose?: (event: FileEvent) => void;
		onrename?: (event: FileEvent) => void;
		onload?: (event: FileEvent) => void;
		onloaderror?: (event: FileEvent) => void;
		onloadstart?: (event: FileEvent) => void;
		onloadend?: (event: FileEvent) => void;
		onchangemode?: (event: FileEvent) => void;
		onrun?: (event: FileEvent) => void;
		oncanrun?: (event: FileEvent) => void;

		constructor(name: string, options: FileOptions);

		readonly type: string;

		readonly tabIcon: string;

		readonly content: HTMLElement;

		id: string;

		filename: string;

		location: string;

		uri: string;

		eol: "windows" | "unix";

		editable: boolean;

		isUnsaved: boolean;

		readonly name: string;

		readonly cacheFile: string;

		readonly icon: string;

		readonly tab: string;

		readonly SAFMode: "single" | "tree" | undefined;

		writeToCache(): Promise<void>;

		isChanged(): Promise<boolean>;

		canRun(): Promise<boolean>;

		readCanRun(): Promise<boolean>;

		writeCanRun(cb: () => boolean | Promise<boolean>): Promise<boolean>;

		remove(force: boolean): Promise<void>;

		save(): Promise<boolean>;

		saveAs(): Promise<boolean>;

		setMode(mode: string): void;

		makeActive(): void;

		removeActive(): void;

		openWith(): void;

		editWith(): void;

		share(): void;

		runAction(): void;

		run(): void;

		runFile(): void;

		render(): void;

		on(event: FileEventType, callback: (event: FileEvent) => void): void;

		off(event: FileEventType, callback: (event: FileEvent) => void): void;

		addStyle(style: string): void;

		setCustomTitle(titleFn: () => void): void;
	}

	interface FileOptions {
		isUnsaved?: boolean;

		render?: boolean;

		id?: string;

		uri?: string;

		text?: string;

		editable?: boolean;

		deletedFile?: boolean;

		SAFMode?: "single" | "tree";

		encoding?: string;

		cursorPos?: object;

		scrollLeft?: number;

		scrollTop?: number;

		folds?: Ace.Fold[];

		type?: string;

		tabIcon?: string;

		content?: string | HTMLElement;

		stylesheets?: string | string[];

		hideQuickTools?: boolean;
	}

	interface FileEvent {
		target: EditorFile;
		stopPropagation(): void;
		preventDefault(): void;
		readonly BUBBLING_PHASE: boolean;
		readonly defaultPrevented: boolean;
	}

	type FileEventType =
		| "run"
		| "save"
		| "change"
		| "focus"
		| "blur"
		| "close"
		| "rename"
		| "load"
		| "loadError"
		| "loadStart"
		| "loadEnd"
		| "changeMode"
		| "changeEncoding"
		| "changeReadOnly";
}
