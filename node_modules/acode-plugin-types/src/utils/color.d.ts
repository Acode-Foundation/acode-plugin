declare namespace Acode {
	interface ColorConstructor {
		(color: string): Color;
	}

	interface Color {
		isDark: boolean;

		isLight: boolean;

		lightness: boolean;

		luminance: boolean;

		hex: string;

		hsl: { h: number; s: number; l: number };

		darken(ratio: number): Color;

		lighten(ratio: number): Color;
	}
}
