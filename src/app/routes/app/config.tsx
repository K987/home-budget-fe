import { ErrorBoundary } from 'react-error-boundary';

const ConfigRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span>Config</span>
    </ErrorBoundary>
  );
};

export default ConfigRoute;
