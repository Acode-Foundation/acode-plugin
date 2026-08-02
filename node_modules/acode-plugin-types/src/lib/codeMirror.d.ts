declare namespace Acode {
	type MaybePromise<T> = T | PromiseLike<T>;

	type CodeMirrorExtension = unknown | readonly unknown[];

	interface CodeMirrorDoc {
		readonly length: number;
		toString(): string;
		sliceString?(from: number, to?: number): string;
	}

	interface CodeMirrorSelectionRange {
		anchor: number;
		head: number;
		from: number;
		to: number;
	}

	interface CodeMirrorSelection {
		main: CodeMirrorSelectionRange;
		ranges: readonly CodeMirrorSelectionRange[];
	}

	interface CodeMirrorEditorState {
		doc: CodeMirrorDoc;
		selection?: CodeMirrorSelection;
		[key: string]: unknown;
	}

	interface CodeMirrorChangeSpec {
		from: number;
		to?: number;
		insert: string;
	}

	interface CodeMirrorDispatchSpec {
		changes?: CodeMirrorChangeSpec | readonly CodeMirrorChangeSpec[];
		selection?: unknown;
		effects?: unknown | readonly unknown[];
		annotations?: readonly unknown[];
		[key: string]: unknown;
	}

	interface AceStyleSession {
		getValue(): string;
		setValue(value: string): void;
		getMode?(): string | { $id?: string; id?: string };
		setMode?(mode: string): void;
		[key: string]: unknown;
	}

	interface EditorSelectionCompat {
		getRange():
			| Ace.Range
			| {
					start: { row: number; column: number };
					end: { row: number; column: number };
			  };
	}

	interface EditorLike {
		state: CodeMirrorEditorState;
		commands: Commands;
		session: AceStyleSession;
		dispatch(...specs: CodeMirrorDispatchSpec[]): void;
		focus(): void;
		getValue(): string;
		insert(text: string): void;
		gotoLine(lineNumber: number, column?: number, animate?: boolean): void;
		getCursorPosition(): { row: number; column: number };
		moveCursorToPosition(position: {
			row: number;
			column: number;
		}): void;
		getCopyText(): string;
		selection: EditorSelectionCompat;
	}
}
