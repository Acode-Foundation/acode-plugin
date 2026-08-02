type WebSocketReadyState = 0 | 1 | 2 | 3;

type WebSocketBinaryType = "" | "arraybuffer" | "blob";

type WebSocketOpenHandler = (event: Event) => void;

interface WebSocketMessageEvent extends MessageEvent {
	readonly binary: boolean;
}

type WebSocketMessageHandler = (event: WebSocketMessageEvent) => void;

type WebSocketCloseHandler = (event: CloseEvent) => void;

interface WebSocketErrorEvent extends Event {
	message?: string;
}

type WebSocketErrorHandler = (event: WebSocketErrorEvent) => void;

interface CordovaWebSocketInstance extends EventTarget {
	readonly instanceId: string;

	readonly extensions: string;

	readonly readyState: WebSocketReadyState;

	readonly url: string;

	binaryType: WebSocketBinaryType;

	onopen: WebSocketOpenHandler | null;

	onmessage: WebSocketMessageHandler | null;

	onclose: WebSocketCloseHandler | null;

	onerror: WebSocketErrorHandler | null;

	send(message: string | ArrayBuffer | ArrayBufferView, binary?: boolean): void;

	close(code?: number, reason?: string): void;
}

interface CordovaWebSocketInstanceStatic {
	readonly CONNECTING: 0;
	readonly OPEN: 1;
	readonly CLOSING: 2;
	readonly CLOSED: 3;
}

interface CordovaWebSocket {
	DEBUG: boolean;

	connect(
		url: string,
		protocols?: string | string[] | null,
		headers?: Record<string, string> | null,
		binaryType?: WebSocketBinaryType,
	): Promise<CordovaWebSocketInstance>;

	listClients(): Promise<string[]>;

	send(
		instanceId: string,
		message: string | ArrayBuffer | ArrayBufferView,
		binary?: boolean,
	): Promise<void>;

	close(instanceId: string, code?: number, reason?: string): Promise<void>;
}

interface Cordova {
	websocket: CordovaWebSocket;
}

declare const cordova: Cordova;
