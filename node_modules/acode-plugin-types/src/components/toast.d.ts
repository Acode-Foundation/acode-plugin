declare namespace Acode {
	interface Toast {
		(message: string, duration?: number): void;
	}
}

declare const toast: Acode.Toast;

interface Window {
	toast: Acode.Toast;
}
