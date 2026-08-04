declare namespace Acode {
	interface EditorManager {
		files: EditorFile[];
		onupdate: () => void;
		activeFile: EditorFile;
		addFile(file: Partial<EditorFile>): void;
		addNewFile(filename?: string, options?: FileOptions): EditorFile;
		setSubText(file: EditorFile): void;
		editor: Ace.Editor & EditorLike;
		isCodeMirror: boolean;
		getFile(
			test: string,
			type: "uri" | "id" | "name" | "git" | "gist",
		): EditorFile;
		switchFile(id: string): void;
		hasUnsavedFiles(): number;
		getEditorHeight(editor: Ace.Editor & EditorLike): number;
		getEditorWidth(editor: Ace.Editor & EditorLike): number;
		container: HTMLElement;
		header: HTMLElement;
		readonly isScrolling: boolean;
		readonly TIMEOUT_VALUE: number;
		readonly openFileList: HTMLElement;
		on(
			event:
				| "file-content-changed"
				| "file-loaded"
				| "remove-file"
				| "save-file"
				| "switch-file"
				| "update",
			listener: (file: EditorFile) => void,
		): void;
		on(
			event: "add-folder" | "remove-folder" | "update-folder",
			listener: (ev: { url: string; name: string }) => void,
		): void;
		on(event: EditorEvent, listener: (...args: any[]) => void): void;
		off(event: string, listener: (...args: any[]) => void): void;
		emit(event: EditorEvent, ...args: any[]): void;
	}

	type EditorEvent =
		| "add-folder"
		| "change"
		| "file-content-changed"
		| "file-loaded"
		| "init-open-file-list"
		| "new-file"
		| "remove-file"
		| "remove-folder"
		| "rename-file"
		| "save-file"
		| "switch-file"
		| "update"
		| "update-folder";
}

declare const editorManager: Acode.EditorManager;

interface Window {
	editorManager: Acode.EditorManager;
}
