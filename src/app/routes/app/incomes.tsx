import { ErrorBoundary } from 'react-error-boundary';

const IncomesRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span>Incomes</span>
    </ErrorBoundary>
  );
};

export default IncomesRoute;
