type ExecutorOutputType = "stdout" | "stderr" | "exit" | "unknown";

type ExecutorOutputCallback = (type: ExecutorOutputType, data: string) => void;

interface Executor {
	readonly ExecutorType: "Executor" | "BackgroundExecutor";

	BackgroundExecutor: Executor;

	start(
		command: string,
		onData: ExecutorOutputCallback,
		alpine?: boolean,
	): Promise<string>;

	write(uuid: string, input: string): Promise<string>;

	moveToBackground(): Promise<string>;

	moveToForeground(): Promise<string>;

	stop(uuid: string): Promise<string>;

	isRunning(uuid: string): Promise<boolean>;

	stopService(): Promise<string>;

	execute(command: string, alpine?: boolean): Promise<string>;

	loadLibrary(path: string): Promise<string>;
}

declare const Executor: Executor;
