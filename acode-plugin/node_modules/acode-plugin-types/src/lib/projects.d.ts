declare namespace Acode {
	interface Projects {
		list(): { name: string; icon: string }[];

		get(
			name: string,
		): { files: Record<string, string>; icon: string } | undefined;

		set(
			project: string,
			files: () => Promise<Record<string, string>>,
			iconSrc: string,
		): void;
	}
}
