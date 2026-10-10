import { ErrorBoundary } from 'react-error-boundary';

const ExpensesRoute = () => {
  return (
    <ErrorBoundary fallback={<div>Some error message</div>}>
      <span title="Expenses">Expenses</span>
    </ErrorBoundary>
  );
};

export default ExpensesRoute;
