type BrowseMode = "file" | "folder" | "both";

interface SelectedFile {
	type: "file" | "folder";
	url: string;
	name: string;
}

interface DefaultDir {
	name: string;
	url: string;
}

interface FileBrowser {
	(
		mode?: BrowseMode,
		info?: string,
		doesOpenLast?: boolean,
		...defaultDir: DefaultDir[]
	): Promise<SelectedFile>;

	openFile(res: SelectedFile & { mode?: string }): void;

	openFileError(err: { code?: number }): void;

	openFolder(res: SelectedFile): Promise<void>;

	openFolderError(err: { code?: number }): void;

	open(res: SelectedFile): void;

	openError(err: { code?: number }): void;
}
