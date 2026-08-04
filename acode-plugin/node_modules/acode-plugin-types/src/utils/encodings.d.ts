declare namespace Acode {
	interface Encodings {
		readonly encodings: {
			name: string;
			labels: string[];
			aliases: string[];
		}[];

		encode(text: string, charset: string): Promise<ArrayBuffer>;

		decode(buffer: ArrayBuffer, charset: string): Promise<string>;
	}
}
