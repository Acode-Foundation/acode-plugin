interface SystemShortcut {
	id: string;
	label: string;
	description: string;
	icon: string;
	action: string;
	data: string;
}

interface SystemAppInfo {
	packageName: string;
	versionName: string;
	versionCode: number;
	label: string;
}

interface SystemWebviewInfo {
	packageName: string;
	versionName: string;
}

interface SystemInAppBrowser {
	onOpenExternalBrowser: ((url: string) => void) | null;
	onError: ((error: string) => void) | null;
}

interface SystemIntent {
	action?: string;
	data?: string;
	type?: string;
	extras?: Record<string, unknown>;
}

type SystemSuccessCallback<T = string> = (result: T) => void;

type SystemErrorCallback = (error: string) => void;

interface System {
	isManageExternalStorageDeclared(
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	hasGrantedStorageManager(
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	requestStorageManager(
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	copyToUri(
		srcUri: string,
		destUri: string,
		fileName: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	fileExists(
		path: string,
		countSymlinks: boolean,
		success: SystemSuccessCallback<number>,
		error: SystemErrorCallback,
	): void;

	createSymlink(
		target: string,
		linkPath: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	writeText(
		path: string,
		content: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	deleteFile(
		path: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	setExec(
		path: string,
		executable: boolean,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	getNativeLibraryPath(
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	getFilesDir(success: SystemSuccessCallback, error: SystemErrorCallback): void;

	getParentPath(
		path: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	listChildren(
		path: string,
		success: SystemSuccessCallback<string[]>,
		error: SystemErrorCallback,
	): void;

	mkdirs(
		path: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	getArch(
		success: SystemSuccessCallback<
			"arm64-v8a" | "armeabi-v7a" | "x86_64" | "x86"
		>,
		error: SystemErrorCallback,
	): void;

	clearCache(success: SystemSuccessCallback, error: SystemErrorCallback): void;

	getWebviewInfo(
		success: SystemSuccessCallback<SystemWebviewInfo>,
		error: SystemErrorCallback,
	): void;

	isPowerSaveMode(
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	fileAction(
		fileUri: string,
		filename: string,
		action: string,
		mimeType: string,
		onFail?: SystemErrorCallback,
	): void;

	fileAction(
		fileUri: string,
		action: string,
		mimeType: string,
		onFail?: SystemErrorCallback,
	): void;

	getAppInfo(
		success: SystemSuccessCallback<SystemAppInfo>,
		error: SystemErrorCallback,
	): void;

	addShortcut(
		shortcut: SystemShortcut,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	removeShortcut(
		id: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	pinShortcut(
		id: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	manageAllFiles(
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	getAndroidVersion(
		success: SystemSuccessCallback<number>,
		error: SystemErrorCallback,
	): void;

	isExternalStorageManager(
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	requestPermission(
		permission: string,
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	requestPermissions(
		permissions: string[],
		success: SystemSuccessCallback<Record<string, boolean>>,
		error: SystemErrorCallback,
	): void;

	hasPermission(
		permission: string,
		success: SystemSuccessCallback<boolean>,
		error: SystemErrorCallback,
	): void;

	openInBrowser(src: string): void;

	launchApp(
		app: string,
		className: string | null,
		data: string | null,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	inAppBrowser(
		url: string,
		title: string,
		showButtons?: boolean,
		disableCache?: boolean,
	): SystemInAppBrowser;

	setUiTheme(
		systemBarColor: string,
		theme: "light" | "dark",
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	setIntentHandler(
		handler: (intent: SystemIntent) => void,
		onerror: SystemErrorCallback,
	): void;

	getCordovaIntent(
		success: SystemSuccessCallback<SystemIntent>,
		error: SystemErrorCallback,
	): void;

	setInputType(
		type: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	getGlobalSetting(
		key: string,
		success: SystemSuccessCallback,
		error: SystemErrorCallback,
	): void;

	compareFileText(
		fileUri: string,
		encoding: string,
		currentText: string,
	): Promise<boolean>;

	compareTexts(text1: string, text2: string): Promise<boolean>;
}

declare const system: System;
