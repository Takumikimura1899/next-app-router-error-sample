import { CustomError } from '../_customError';

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id.match(/\d{4}/)) {
    throw new CustomError('custom error', 'code=400');
  }
  return (
    <div>
      <h2>{params.id} page</h2>
    </div>
  );
}
