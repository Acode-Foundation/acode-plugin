declare namespace Acode {
	interface Url {
		basename(url: string): string | null;

		areSame(...urls: string[]): boolean;

		extname(url: string): string | null;

		join(...pathnames: string[]): string;

		safe(url: string): string;

		pathname(url: string): string;

		dirname(url: string): string;

		parse(url: string): { url: string; query: string };

		formate(urlObj: {
			protocol: "ftp:" | "sftp:" | "http:" | "https:";
			hostname: string | number;
			path: string;
			username?: string;
			password?: string;
			port?: string | number;
			query?: object;
		}): string;

		getProtocol(url: string): "ftp:" | "sftp:" | "http:" | "https:";

		hidePassword(url: string): string;

		decodeUrl(url: string): {
			protocol: "ftp:" | "sftp:" | "http:" | "https:";
			hostname: string | number;
			path: string;
			username: string;
			password: string;
			port: string | number;
			query: object;
		};

		trimSlash(url: string): string;
	}
}
