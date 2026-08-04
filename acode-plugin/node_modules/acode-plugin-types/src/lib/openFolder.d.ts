declare namespace Acode {
	interface OpenFolder {
		(path: string, options?: OpenFolderOptions): void;

		add(url: string, type: "file" | "folder"): void;

		renameItem(oldFile: string, newFile: string, newFilename: string): void;

		removeItem(url: string): void;

		removeFolders(url: string): void;

		find(url: string): void;
	}

	type OpenFolderOptions = {
		name?: string;
	} & Partial<Pick<Folder, "id" | "saveState" | "listFiles" | "listState">>;

	type AddedFolder = Folder[];

	interface Folder {
		id: string;

		url: string;

		title: string;

		listFiles: boolean;

		saveState: boolean;

		$node: Collapsible;

		clipBoard: ClipBoard;

		remove: () => void;

		reload: () => void;

		listState: Map<string, boolean>;
	}

	interface ClipBoard {
		url?: string;
		$el?: HTMLElement;
		action?: "cut" | "copy";
	}
}

declare const addedFolder: Acode.AddedFolder;

interface Window {
	addedFolder: Acode.AddedFolder;
}
