import { notFound } from 'next/navigation';
import { CustomError } from '../_customError';

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id.match(/\d{4}/)) {
    throw new CustomError('custom error', 'code=400');
  }
  if (params.id === '9999') {
    notFound();
  }
  return (
    <div>
      <h2>{params.id} page</h2>
    </div>
  );
}
