interface CustomTabsOptions {
	toolbarColor?: string;

	showTitle?: boolean;
}

interface CustomTabs {
	open(
		url: string,
		options?: CustomTabsOptions,
		success?: () => void,
		error?: (message: string) => void,
	): void;
}

declare const CustomTabs: CustomTabs;
