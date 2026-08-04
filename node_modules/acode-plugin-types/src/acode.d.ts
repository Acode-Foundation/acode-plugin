/// <reference path="./ace/index.d.ts" />
/// <reference path="./components/index.d.ts" />
/// <reference path="./dialogs/index.d.ts" />
/// <reference path="./handlers/index.d.ts" />
/// <reference path="./lib/index.d.ts" />
/// <reference path="./pages/fileBrowser/index.d.ts" />
/// <reference path="./theme/index.d.ts" />
/// <reference path="./utils/index.d.ts" />
/// <reference path="./fileSystem.d.ts" />
/// <reference path="./sideBarApps.d.ts" />

declare namespace Acode {
	interface PluginInit {
		(
			baseUrl: string,
			$page: WCPage,
			options: PluginInitOptions,
		): void | Promise<void>;
	}

	interface PluginInitOptions {
		cacheFileUrl: string;
		cacheFile: FileSystem;
		firstInit: boolean;
		ctx: PluginContext | null;
	}

	type PluginSettingSelectOption =
		| string
		| readonly [value: string, label: string];

	interface PluginSettingPromptOption {
		match: RegExp;
		required: boolean;
		placeholder: string;
		test: (value: unknown) => boolean;
	}

	interface PluginSetting {
		key: string;
		text: string;
		icon?: string;
		iconColor?: string;
		info?: string;
		value?: unknown;
		valueText?: (value: unknown) => string;
		checkbox?: boolean;
		select?: readonly PluginSettingSelectOption[];
		prompt?: string;
		promptType?: string;
		promptOptions?: readonly PluginSettingPromptOption[];
	}

	interface PluginSettings {
		list: PluginSetting[];
		cb: (key: string, value: unknown) => void;
	}

	interface PluginContext {
		created_at: number;
		uuid: string;
		grantedPermission(permission: string): Promise<boolean>;
		listAllPermissions(): Promise<string[]>;
		getSecret(key: string, defaultValue?: string): Promise<string>;
		setSecret(key: string, value: string): Promise<void>;
	}

	interface AppConfig {
		BASE_URL: string;
		SUPPORTED_EDITOR: string;
		FILE_NAME_REGEX: RegExp;
		FONT_SIZE: RegExp;
		DEFAULT_FILE_SESSION: string;
		DEFAULT_FILE_NAME: string;
		CONSOLE_PORT: number;
		SERVER_PORT: number;
		PREVIEW_PORT: number;
		VIBRATION_TIME: number;
		VIBRATION_TIME_LONG: number;
		SCROLL_SPEED_FAST_X2: string;
		SCROLL_SPEED_NORMAL: string;
		SCROLL_SPEED_FAST: string;
		SCROLL_SPEED_SLOW: string;
		SIDEBAR_SLIDE_START_THRESHOLD_PX: number;
		CUSTOM_THEME: string;
		FEEDBACK_EMAIL: string;
		ERUDA_CDN: string;
		PLAY_STORE_URL: string;
		API_BASE: string;
		SKU_LIST: string[];
		LOG_FILE_NAME: string;
		DOCS_URL: string;
		GITHUB_URL: string;
		TELEGRAM_URL: string;
		DISCORD_URL: string;
		TWITTER_URL: string;
		INSTAGRAM_URL: string;
		FOXBIZ_URL: string;
		HAS_PRO: boolean;
	}

	interface CodeMirrorNamespace {
		autocomplete: typeof import("@codemirror/autocomplete");
		commands: typeof import("@codemirror/commands");
		language: typeof import("@codemirror/language");
		lezer: typeof import("@lezer/highlight") & {
			common: typeof import("@lezer/common");
			highlight: typeof import("@lezer/highlight");
			lr: typeof import("@lezer/lr");
		};
		lint: typeof import("@codemirror/lint");
		search: typeof import("@codemirror/search");
		state: typeof import("@codemirror/state");
		view: typeof import("@codemirror/view");
	}

	interface LspTransportDescriptor {
		kind: "stdio" | "websocket" | "external";
		command?: string;
		args?: string[];
		url?: string;
		options?: LspWebSocketTransportOptions;
		protocols?: string[];
		create?: (
			server: LspServerDefinition,
			context: LspTransportContext,
		) => LspTransportHandle;
	}

	interface LspWebSocketTransportOptions {
		binary?: boolean;
		timeout?: number;
		reconnect?: boolean;
		maxReconnectAttempts?: number;
	}

	interface LspTransportHandle {
		transport: unknown;
		dispose: () => Promise<void> | void;
		ready: Promise<void>;
	}

	interface LspTransportContext {
		uri?: string;
		file?: EditorFile;
		view?: unknown;
		languageId?: string;
		rootUri?: string | null;
		originalRootUri?: string | null;
		debugWebSocket?: boolean;
		dynamicPort?: number;
	}

	interface LspLauncherInstallConfig {
		kind?:
			| "apk"
			| "npm"
			| "pip"
			| "cargo"
			| "github-release"
			| "manual"
			| "shell";
		command?: string;
		updateCommand?: string;
		uninstallCommand?: string;
		label?: string;
		source?: string;
		executable?: string;
		packages?: string[];
		pipCommand?: string;
		npmCommand?: string;
		pythonCommand?: string;
		global?: boolean;
		breakSystemPackages?: boolean;
		repo?: string;
		assetNames?: Record<string, string>;
		archiveType?: "zip" | "binary";
		extractFile?: string;
		binaryPath?: string;
	}

	interface LspLauncherConfig {
		command?: string;
		args?: string[];
		startCommand?: string | string[];
		checkCommand?: string;
		versionCommand?: string;
		updateCommand?: string;
		uninstallCommand?: string;
		install?: LspLauncherInstallConfig;
		bridge?: {
			kind?: "axs";
			port?: number;
			command?: string;
			args?: string[];
			session?: string;
		};
	}

	interface LspManagedServerOptions {
		id: string;
		label: string;
		languages: string[];
		enabled?: boolean;
		useWorkspaceFolders?: boolean;
		command?: string;
		args?: string[];
		transport?: Partial<LspTransportDescriptor>;
		bridge?: LspLauncherConfig["bridge"] | null;
		installer?: LspLauncherInstallConfig;
		checkCommand?: string;
		versionCommand?: string;
		updateCommand?: string;
		uninstallCommand?: string;
		startupTimeout?: number;
		initializationOptions?: Record<string, unknown>;
		clientConfig?: Record<string, unknown> | LspClientConfig;
		resolveLanguageId?: LspServerManifest["resolveLanguageId"];
		rootUri?: LspServerManifest["rootUri"];
		documentUri?: LspServerManifest["documentUri"];
		capabilityOverrides?: Record<string, unknown>;
	}

	interface LspClientConfig {
		useDefaultExtensions?: boolean;
		builtinExtensions?: {
			hover?: boolean;
			completion?: boolean;
			signature?: boolean;
			keymaps?: boolean;
			diagnostics?: boolean;
			inlayHints?: boolean;
			formatting?: boolean;
		};
		extensions?: unknown[];
		notificationHandlers?: Record<
			string,
			(client: unknown, params: unknown) => boolean
		>;
		workspace?: (client: unknown) => unknown;
		rootUri?: string;
		timeout?: number;
		highlightLanguage?: (name: string) => unknown;
	}

	interface LspRootUriContext {
		uri?: string;
		file?: EditorFile;
		view?: unknown;
		languageId?: string;
		rootUri?: string;
	}

	interface LspDocumentUriContext extends LspRootUriContext {
		normalizedUri?: string | null;
	}

	interface LspLanguageResolverContext {
		languageId: string;
		languageName?: string;
		uri?: string;
		file?: EditorFile;
	}

	interface LspServerManifest {
		id?: string;
		label?: string;
		enabled?: boolean;
		languages?: string[];
		transport?: LspTransportDescriptor;
		initializationOptions?: Record<string, unknown>;
		clientConfig?: Record<string, unknown> | LspClientConfig;
		startupTimeout?: number;
		capabilityOverrides?: Record<string, unknown>;
		rootUri?:
			| ((uri: string, context: unknown) => MaybePromise<string | null>)
			| ((
					uri: string,
					context: LspRootUriContext,
			  ) => MaybePromise<string | null>)
			| null;
		documentUri?:
			| ((
					uri: string,
					context: LspDocumentUriContext,
			  ) => MaybePromise<string | null | undefined>)
			| null;
		resolveLanguageId?:
			| ((context: LspLanguageResolverContext) => string | null)
			| null;
		launcher?: LspLauncherConfig;
		runtimes?: string[];
		useWorkspaceFolders?: boolean;
	}

	interface LspServerDefinition extends LspServerManifest {
		id: string;
		label: string;
		enabled: boolean;
		languages: string[];
		transport: LspTransportDescriptor;
	}

	interface LspServerBundle {
		id: string;
		label?: string;
		getServers: () => LspServerManifest[];
		getExecutable?: (
			serverId: string,
			manifest: LspServerManifest,
		) => string | null | undefined;
		checkInstallation?: (
			serverId: string,
			manifest: LspServerManifest,
		) => Promise<unknown>;
		installServer?: (
			serverId: string,
			manifest: LspServerManifest,
			mode: "install" | "update" | "reinstall",
			options?: { promptConfirm?: boolean },
		) => Promise<boolean>;
		uninstallServer?: (
			serverId: string,
			manifest: LspServerManifest,
			options?: { promptConfirm?: boolean },
		) => Promise<boolean>;
	}

	type LspRegistrationEntry = LspServerManifest | LspServerBundle;

	type LspServerUpdater = (
		current: LspServerDefinition,
	) => Partial<LspServerDefinition> | null;

	type LspRegistryEventType = "register" | "unregister" | "update";

	type LspRegistryEventListener = (
		event: LspRegistryEventType,
		server: LspServerDefinition,
	) => void;

	type LspWorkspaceKind =
		| "app-private"
		| "builtin-alpine"
		| "termux-saf"
		| "saf"
		| "remote"
		| "proot-distro"
		| "virtual"
		| "unknown";

	interface LspRuntimeContext extends LspTransportContext {
		documentUri?: string | null;
		originalDocumentUri?: string;
		serverId?: string;
		workspaceKind?: LspWorkspaceKind;
		allowNonTerminalWorkspace?: boolean;
	}

	type LspClientScope = "workspace" | "document";

	interface LspRuntimeUriResolutionContext extends LspRuntimeContext {
		originalDocumentUri: string;
		originalRootUri: string | null;
		normalizedDocumentUri: string | null;
		normalizedRootUri: string | null;
	}

	interface LspRuntimeUriResolution {
		documentUri?: string | null;
		rootUri?: string | null;
		scope?: LspClientScope;
	}

	type LspRuntimeConnection =
		| {
				kind: "transport";
				providerId: string;
				transport: LspTransportHandle;
				dispose?: () => Promise<void> | void;
		  }
		| {
				kind: "websocket";
				providerId: string;
				url: string;
				protocols?: string[];
				dispose?: () => Promise<void> | void;
		  };

	interface LspInstallCheckResult {
		status: "present" | "missing" | "failed" | "unknown";
		version?: string | null;
		canInstall: boolean;
		canUpdate: boolean;
		message?: string;
	}

	type InstallCheckResult = LspInstallCheckResult;

	interface LspRuntimeProvider {
		id: string;
		label: string;
		priority?: number;
		canHandle: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
		) => boolean | Promise<boolean>;
		/**
		 * Translate editor URIs into paths visible inside this runtime. The hook runs
		 * only after this provider has been selected, so one runtime cannot rewrite
		 * another provider's documents.
		 */
		resolveUris?: (
			server: LspServerDefinition,
			context: LspRuntimeUriResolutionContext,
		) => MaybePromise<LspRuntimeUriResolution | null | undefined>;
		checkInstallation?: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
		) => Promise<LspInstallCheckResult>;
		install?: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
			mode: "install" | "update" | "reinstall",
			options?: { promptConfirm?: boolean },
		) => Promise<boolean>;
		uninstall?: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
			options?: { promptConfirm?: boolean },
		) => Promise<boolean>;
		getInstallCommand?: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
			mode?: "install" | "update",
		) => string | null;
		getUninstallCommand?: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
		) => string | null;
		start: (
			server: LspServerDefinition,
			context: LspRuntimeContext,
		) => Promise<LspRuntimeConnection>;
		stop?: (connection: LspRuntimeConnection) => Promise<void> | void;
	}

	interface LspApi {
		defineServer(options: LspManagedServerOptions): LspServerManifest;
		defineBundle(options: {
			id: string;
			label?: string;
			servers: LspServerManifest[];
			hooks?: {
				getExecutable?: (
					serverId: string,
					manifest: LspServerManifest,
				) => string | null | undefined;
				checkInstallation?: (
					serverId: string,
					manifest: LspServerManifest,
				) => Promise<unknown>;
				installServer?: (
					serverId: string,
					manifest: LspServerManifest,
					mode: "install" | "update" | "reinstall",
					options?: { promptConfirm?: boolean },
				) => Promise<boolean>;
				uninstallServer?: (
					serverId: string,
					manifest: LspServerManifest,
					options?: { promptConfirm?: boolean },
				) => Promise<boolean>;
			};
		}): LspServerBundle;
		register(
			entry: LspRegistrationEntry,
			options?: { replace?: boolean },
		): LspServerDefinition | LspServerBundle;
		upsert(entry: LspRegistrationEntry): LspServerDefinition | LspServerBundle;
		installers: {
			apk(options: {
				packages: string[];
				executable: string;
				label?: string;
				source?: string;
			}): LspLauncherInstallConfig;
			npm(options: {
				packages: string[];
				executable: string;
				label?: string;
				source?: string;
				global?: boolean;
			}): LspLauncherInstallConfig;
			pip(options: {
				packages: string[];
				executable: string;
				label?: string;
				source?: string;
				breakSystemPackages?: boolean;
			}): LspLauncherInstallConfig;
			cargo(options: {
				packages: string[];
				executable: string;
				label?: string;
				source?: string;
			}): LspLauncherInstallConfig;
			manual(options: {
				binaryPath: string;
				executable?: string;
				label?: string;
				source?: string;
			}): LspLauncherInstallConfig;
			shell(options: {
				command: string;
				executable: string;
				updateCommand?: string;
				uninstallCommand?: string;
				label?: string;
				source?: string;
			}): LspLauncherInstallConfig;
			githubRelease(options: {
				repo: string;
				binaryPath: string;
				executable?: string;
				assetNames: Record<string, string>;
				extractFile?: string;
				archiveType?: "zip" | "binary";
				label?: string;
				source?: string;
			}): LspLauncherInstallConfig;
		};
		servers: {
			get(id: string): LspServerDefinition | null;
			list(): LspServerDefinition[];
			listForLanguage(
				languageId: string,
				options?: { includeDisabled?: boolean },
			): LspServerDefinition[];
			update(id: string, updater: LspServerUpdater): LspServerDefinition | null;
			unregister(id: string): boolean;
			onChange(listener: LspRegistryEventListener): () => void;
		};
		bundles: {
			list(): LspServerBundle[];
			getForServer(id: string): LspServerBundle | null;
			unregister(id: string): boolean;
		};
		runtimes: {
			register(provider: LspRuntimeProvider): LspRuntimeProvider;
			unregister(id: string): boolean;
			get(id: string): LspRuntimeProvider | null;
			list(): LspRuntimeProvider[];
			select(
				server: LspServerDefinition,
				context?: LspRuntimeContext,
			): Promise<LspRuntimeProvider | null>;
		};
		registerRuntimeProvider: Acode.LspApi["runtimes"]["register"];
		unregisterRuntimeProvider: Acode.LspApi["runtimes"]["unregister"];
		clientManager: {
			setOptions(options: Partial<LspClientManagerOptions>): void;
			getActiveClients(): LspClientState[];
		};
	}

	interface LspClientManagerOptions {
		diagnosticsUiExtension?: unknown | unknown[];
		clientExtensions?: unknown | unknown[];
		resolveRoot?: (context: LspRootUriContext) => Promise<string | null>;
		displayFile?: (uri: string) => Promise<unknown | null>;
		openFile?: (uri: string) => Promise<unknown | null>;
		resolveLanguageId?: (uri: string) => string | null;
		onClientIdle?: (info: {
			server: LspServerDefinition;
			client: unknown;
			rootUri: string | null;
		}) => void;
		allowNonTerminalWorkspace?: boolean;
	}

	interface LspClientState {
		server: LspServerDefinition;
		client: unknown;
		transport: LspTransportHandle;
		rootUri: string | null;
		attach(uri: string, view: unknown, aliases?: string[]): void;
		detach(uri: string, view?: unknown): void;
		dispose(): Promise<void>;
	}

	type Require = <K extends keyof Modules | (string & {})>(
		moduleName: K,
	) => Lowercase<K> extends keyof Modules ? Modules[Lowercase<K>] : unknown;

	interface FormatterRegistration {
		id: string;
		name: string;
		exts: string[];
	}

	interface Modules {
		"@codemirror/autocomplete": typeof import("@codemirror/autocomplete");
		"@codemirror/commands": typeof import("@codemirror/commands");
		"@codemirror/language": typeof import("@codemirror/language");
		"@codemirror/lint": typeof import("@codemirror/lint");
		"@codemirror/search": typeof import("@codemirror/search");
		"@codemirror/state": typeof import("@codemirror/state");
		"@codemirror/view": typeof import("@codemirror/view");
		"@lezer/common": typeof import("@lezer/common");
		"@lezer/highlight": typeof import("@lezer/highlight");
		"@lezer/lr": typeof import("@lezer/lr");
		acemodes: AceModes;
		actionstack: ActionStack;
		addedfolder: AddedFolder;
		alert: Alert;
		color: Color;
		colorpicker: ColorPicker;
		commands: Commands;
		confirm: Confirm;
		contextmenu: ContextMenuConstructor;
		createkeyboardevent: CreateKeyboardEvent;
		dialogbox: DialogBoxConstructor;
		editorfile: typeof EditorFile;
		editorlanguages: EditorLanguages;
		editorthemes: EditorThemes;
		encodings: Encodings;
		codemirror: CodeMirrorNamespace;
		config: AppConfig;
		filebrowser: FileBrowser;
		filelist: FileList;
		fonts: Fonts;
		fs: FS;
		fsoperation: FS;
		helpers: Helpers;
		inputhints: InputHints;
		intent: Intent;
		keyboard: Keyboard;
		loader: Loader;
		multiprompt: MultiPrompt;
		lsp: LspApi;
		openfolder: OpenFolder;
		page: Page;
		palette: Palette;
		projects: Projects;
		prompt: Prompt;
		select: Select;
		selectionmenu: SelectionMenu;
		settings: Settings;
		sidebarapps: SidebarApps;
		sidebutton: SideButtonConstructor;
		terminal: Acode.Terminal;
		themebuilder: typeof ThemeBuilder;
		themes: Themes;
		tointernalurl: Helpers["toInternalUri"];
		toast: Toast;
		tutorial: Tutorial;
		url: Url;
		windowresize: WindowResize;
	}

	interface AddIconOptions {
		monochrome?: boolean;
	}

	interface NotificationOptions {
		icon?: string;
		autoClose?: boolean;
		action?: () => void;
		type?: "info" | "warning" | "error" | "success";
	}

	interface FileHandlerFileInfo {
		name: string;
		uri: string;
		extension: string;
		[key: string]: unknown;
	}

	interface FileHandlerOptions {
		extensions: string[];
		handleFile: (fileInfo: FileHandlerFileInfo) => MaybePromise<void>;
	}
}

interface Acode {
	setPluginInit(
		pluginId: string,
		init: Acode.PluginInit,
		settings?: Acode.PluginSettings,
	): void;

	setPluginUnmount(id: string, unmount: () => void): void;

	initPlugin(
		id: string,
		baseUrl: string,
		$page: Acode.WCPage,
		options?: Acode.PluginInitOptions,
	): Promise<void>;

	unmountPlugin(id: string): void;

	define(moduleName: string, module: unknown): void;

	require: Acode.Require;

	exec(command: string, value?: unknown): boolean | undefined;

	registerFormatter(
		pluginId: string,
		extensions: string[],
		format: () => Acode.MaybePromise<void>,
		displayName?: string,
	): void;

	unregisterFormatter(pluginId: string): void;

	format(selectIfNull?: boolean): Promise<boolean>;

	get formatters(): Acode.FormatterRegistration[];

	getFormatterFor(extensions: string[]): [id: string | null, name: string][];

	addIcon(
		iconName: string,
		iconSrc: string,
		options?: Acode.AddIconOptions,
	): void;

	toInternalUrl(url: string): Promise<string>;

	pushNotification(
		title: string,
		message: string,
		options?: Acode.NotificationOptions,
	): void;

	installPlugin(pluginId: string, installerPluginName: string): Promise<void>;

	newEditorFile(filename: string, options?: Acode.FileOptions): void;

	addCommand(
		descriptor: Acode.CommandDescriptor,
	): Acode.RegisteredCommand | null;

	removeCommand(name: string): void;

	execCommand(
		name: string,
		view?: Ace.Editor & Acode.EditorLike,
		args?: unknown,
	): boolean;

	listCommands(): Acode.RegisteredCommand[];

	joinUrl: Acode.Url["join"];
	alert: Acode.Alert;
	confirm: Acode.Confirm;
	select: Acode.Select;
	multiPrompt: Acode.MultiPrompt;
	loader: Acode.Loader;
	prompt: Acode.Prompt;
	fsOperation: Acode.FS;
	fileBrowser: FileBrowser;

	get exitAppMessage(): string | undefined;

	setLoadingMessage(message: string): void;

	waitForPlugin(pluginId: string): Promise<boolean>;

	clearBrokenPluginMark(pluginId: string): void;

	registerFileHandler(id: string, options: Acode.FileHandlerOptions): void;

	unregisterFileHandler(id: string): void;
}

declare const acode: Acode;

declare const ASSETS_DIRECTORY: string;

declare const CACHE_STORAGE: string;

declare const DATA_STORAGE: string;

declare const PLUGIN_DIR: string;

declare const DOES_SUPPORT_THEME: boolean;

declare const IS_FREE_VERSION: boolean;

declare const KEYBINDING_FILE: string;

declare const ANDROID_SDK_INT: number;

declare const Terminal: Terminal;

declare function log(
	level: "error" | "warn" | "info" | "debug",
	message: unknown,
): void;

declare const ace: Ace;

interface Window {
	acode: Acode;
	ASSETS_DIRECTORY: string;
	CACHE_STORAGE: string;
	DATA_STORAGE: string;
	PLUGIN_DIR: string;
	DOES_SUPPORT_THEME: boolean;
	IS_FREE_VERSION: boolean;
	KEYBINDING_FILE: string;
	ANDROID_SDK_INT: number;
	tag: typeof tag;
	log: typeof log;
	ace: Ace;
}
