import { ReactNode } from 'react';

// Ref: https://nextjs.org/docs/advanced-features/custom-error-page#500-page
export default function Custom500(): ReactNode {
  return <h1>500 - Server-side error occurred</h1>;
}
