export class Content {
  private readonly MAX_CONTENT_LENGTH: number = 240;
  private readonly MIN_CONTENT_LENGTH: number = 5;
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error(
        `Content length must be between ${this.MIN_CONTENT_LENGTH} and ${this.MAX_CONTENT_LENGTH} characters.`,
      );
    }

    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return (
      content.length >= this.MIN_CONTENT_LENGTH &&
      content.length <= this.MAX_CONTENT_LENGTH
    );
  }
}
