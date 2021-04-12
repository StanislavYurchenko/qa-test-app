import Test from '../../components/Test';
import PreLoader from '../../components/PreLoader';
import { useSelector } from 'react-redux';
import * as selectors from 'redux/test/testSelectors';

export default function TestPage() {
  const isLoading = useSelector(selectors.loading);
  const error = useSelector(selectors.error);

  return (
    <>
      {error && <div> {error.message}</div>}
      {isLoading && <PreLoader sizePreloader="200px" />}
      {!isLoading && !error && <Test />}
    </>
  );
}
