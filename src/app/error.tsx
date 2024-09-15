'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest: string };
}) {
  return (
    <html lang='ja'>
      <body>
        <h1>Error</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
        <pre>{error.digest}</pre>
      </body>
    </html>
  );
}
