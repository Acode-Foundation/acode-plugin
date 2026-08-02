declare namespace Acode {
	type WindowResizeEventName = "resize" | "resizeStart";

	interface WindowResize {
		(): void;

		on(event: WindowResizeEventName, listener: () => void): void;

		off(event: WindowResizeEventName, listener: () => void): void;
	}
}
