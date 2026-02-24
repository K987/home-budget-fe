import { ErrorBoundary } from 'react-error-boundary';

const PlansRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span>Plans</span>
    </ErrorBoundary>
  );
};

export default PlansRoute;
