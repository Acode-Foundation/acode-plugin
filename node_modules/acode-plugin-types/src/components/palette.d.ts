declare namespace Acode {
	interface Palette {
		(
			getList: (hints: HintModification) => Array<string | string[]>,
			onSelect: (value: string) => void,
			placeholder?: string,
			onRemove?: () => void,
		): void;
	}
}
