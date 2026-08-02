declare namespace Acode {
	interface Prompt {
		(
			message: string,
			defaultValue: string,
			type: "number" | "tel", // TODO: verify
			options: PromptOptions<number>,
		): Promise<number | null>;
		(
			message: string,
			defaultValue: string,
			type: PromptType,
			options: PromptOptions<string>,
		): Promise<string | null>;
	}

	type PromptType =
		| "textarea"
		| "text"
		| "number"
		| "tel"
		| "search"
		| "email"
		| "url";

	type PromptOptions<T> = Partial<{
		match: RegExp;
		required: boolean;
		placeholder: string;
		test: (value: T) => boolean;
	}>;
}
