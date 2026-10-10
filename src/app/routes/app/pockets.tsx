import { ErrorBoundary } from 'react-error-boundary';

const PocketsRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span title="Pockets">Pockets</span>
    </ErrorBoundary>
  );
};

export default PocketsRoute;
