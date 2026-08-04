declare namespace Acode {
	interface FileList {
		(dir: string | (() => object)): Tree[];

		on(event: FileListEvent, callback: (tree: Tree) => void): void;

		off(event: FileListEvent, callback: (tree: Tree) => void): void;
	}

	interface Tree {
		name: string;

		url: string;

		path: string;

		children: Tree[];

		parent: Tree;

		readonly isConnected: boolean;

		readonly root: Tree;

		update(url: string, name?: string): void;

		toJSON(): TreeJson;
	}

	interface TreeJson {
		name: string;
		url: string;
		path: string;
		parent: string;
		isDirectory: boolean;
	}

	type FileListEvent =
		| "add-file"
		| "remove-file"
		| "add-folder"
		| "remove-folder"
		| "refresh";
}
