export class CustomError extends Error {
  digest: string;

  constructor(message: string, digest?: string) {
    super(message);
    this.digest = digest || 'digest';
  }
}
