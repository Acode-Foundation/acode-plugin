declare namespace Acode {
	type CommandBinding =
		| string
		| {
				win?: string;
				linux?: string;
				mac?: string;
		  };

	interface CommandDescriptor {
		name: string;
		description?: string;
		bindKey?: CommandBinding;
		readOnly?: boolean;
		requiresView?: boolean;
		exec: (
			view: (Ace.Editor & EditorLike) | null,
			args?: unknown,
		) => MaybePromise<boolean | undefined>;
	}

	interface RegisteredCommand {
		name: string;
		description?: string;
		readOnly?: boolean;
		requiresView?: boolean;
		key?: string | null;
		run?: (
			view?: (Ace.Editor & EditorLike) | null,
			args?: unknown,
		) => boolean | undefined;
	}

	interface CommandRegistry {
		add(descriptor: CommandDescriptor): RegisteredCommand | null;
		remove(name: string): void;
		execute(
			name: string,
			view?: Ace.Editor & EditorLike,
			args?: unknown,
		): boolean;
		list(): RegisteredCommand[];
	}

	interface Commands {
		addCommand(descriptor: CommandDescriptor): RegisteredCommand | null;
		removeCommand(name: string): void;
		registry: CommandRegistry;
	}
}
