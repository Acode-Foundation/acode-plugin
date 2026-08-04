declare namespace Acode {
	interface FS {
		(url0: `http:${string}` | `https:${string}`, ...url: string[]): FileUrl;
		(...url: string[]): FileSystem;

		extend(
			test: (url: string) => boolean,
			fs: (url: string) => FileSystem,
		): void;

		remove(test: (url: string) => boolean): void;
	}

	interface FileUrl {
		readFile(): Promise<ArrayBuffer>;
		readFile(encoding: "utf-8"): Promise<string>;
		readFile(encoding: "json"): Promise<unknown>;

		writeFile(content: string | ArrayBuffer): Promise<void>;
	}

	interface FileSystem {
		lsDir(): Promise<File[]>;

		readFile(): Promise<ArrayBuffer>;
		readFile(encoding: "utf-8"): Promise<string>;
		readFile(encoding: "json"): Promise<unknown>;

		writeFile(content: string | ArrayBuffer): Promise<void>;

		createFile(name: string, content?: string): Promise<string>;

		createDirectory(name: string): Promise<string>;

		delete(): Promise<void>;

		copyTo(destination: string): Promise<string>;

		moveTo(destination: string): Promise<string>;

		renameTo(newName: string): Promise<string>;

		exists(): Promise<boolean>;

		stat(): Promise<Stat>;
	}

	interface File {
		name: string;
		url: string;
		isFile: boolean;
		isDirectory: boolean;
		isLink: boolean;
	}

	interface Stat extends File {
		size: number;
		modifiedDate: number;
		canRead: boolean;
		canWrite: boolean;
	}
}
