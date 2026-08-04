declare namespace Acode {
	interface MultiPrompt {
		(message: string, inputs: (Input | Input[])[], help: string): Promise<void>;
	}

	type Input = Partial<HTMLInputElement>;
}
