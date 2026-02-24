import { ErrorBoundary } from 'react-error-boundary';

const StatsRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span>Stats</span>
    </ErrorBoundary>
  );
};

export default StatsRoute;
