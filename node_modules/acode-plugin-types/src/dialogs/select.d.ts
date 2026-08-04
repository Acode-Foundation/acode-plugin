declare namespace Acode {
	interface Select {
		(
			title: string,
			items: SelectItems,
			options?: boolean | SelectOptions,
		): Promise<string>;
	}

	type SelectItems = string[] | (string | boolean | null)[][] | SelectItem[];

	interface SelectItem {
		value: string;

		text: string;

		icon?: string;

		disabled?: boolean;

		letters?: string;

		checkbox?: boolean;
	}

	type SelectOptions = Partial<{
		hideOnSelect: boolean;

		textTransform: boolean;

		default: string;

		onCancel: () => void;

		onHide: () => void;
	}>;
}
