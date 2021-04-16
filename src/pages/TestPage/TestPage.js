// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import { defaults } from '@pnotify/core';

import Test from '../../components/Test';
import PreLoader from '../../components/PreLoader';
import { useSelector } from 'react-redux';
import * as selectors from 'redux/test/testSelectors';

export default function TestPage() {
  const isLoading = useSelector(selectors.loading);
  const err = useSelector(selectors.error);

  return (
    <>
      {/* {err &&
        error({
          title: 'Ooops!',
          text: err.message,
          delay: 2000,
        })} */}
      {isLoading && <PreLoader sizePreloader="200px" />}
      {!isLoading && !err && <Test />}
    </>
  );
}
