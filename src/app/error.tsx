'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest: string };
}) {
  if (error.digest === 'code=400') {
    return (
      <html lang='ja'>
        <body>
          <h1>Bad Request</h1>
        </body>
      </html>
    );
  }

  return (
    <html lang='ja'>
      <body>
        <h1>Error</h1>
        <pre>{error.message}</pre>
        <pre>{error.digest}</pre>
      </body>
    </html>
  );
}
