type TerminalLogger = (message: string, ...args: unknown[]) => void;

interface Terminal {
	startAxs(
		installing?: boolean,
		logger?: TerminalLogger,
		err_logger?: TerminalLogger,
	): Promise<boolean | undefined>;

	stopAxs(): Promise<void>;

	isAxsRunning(): Promise<boolean>;

	install(
		logger?: TerminalLogger,
		err_logger?: TerminalLogger,
	): Promise<boolean>;

	isInstalled(): Promise<boolean>;

	isSupported(): Promise<boolean>;

	backup(): Promise<string>;

	restore(): Promise<string>;

	uninstall(): Promise<string>;
}
