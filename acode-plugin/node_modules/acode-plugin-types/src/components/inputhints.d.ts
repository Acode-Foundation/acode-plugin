declare namespace Acode {
	interface InputHints {
		(
			$input: HTMLInputElement,
			hints: Hint[] | HintCallback,
			onSelect?: (value: string) => void,
		): {
			getSelected(): HTMLLIElement | undefined;

			container: HTMLUListElement;
		};
	}

	interface HintObj {
		value: string;
		text: string;
	}

	type Hint = string | HintObj;

	interface HintModification {
		add(hint: Hint, index?: number): void;
		remove(hint: Hint): void;
		removeIndex(index: number): void;
	}

	type HintCallback = (
		setHints: (hints: Array<Hint>) => void,
		modification: HintModification,
	) => void;
}
